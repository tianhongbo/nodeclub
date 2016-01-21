var mailer        = require('nodemailer'); // nodejs email lib
var smtpTransport = require('nodemailer-smtp-transport'); // smtp transport for nodemailer
var config        = require('../config');
var util          = require('util');
var logger        = require('./logger');


var transporter     = mailer.createTransport(smtpTransport(config.mail_opts));
var SITE_ROOT_URL = 'http://' + config.host + ':' + config.port;

/**
 * Send an email
 * @param {Object} data 邮件对象
 */
var sendMail = function (data) {

    // 遍历邮件数组，发送每一封邮件，如果有发送失败的，就再压入数组，同时触发mailEvent事件
    transporter.sendMail(data, function (err) {
        if (err) {
            // 写为日志
            logger.error(err);
        }
    });
};
exports.sendMail = sendMail;

/**
 * 发送激活通知邮件
 * @param {String} who 接收人的邮件地址
 * @param {String} token 重置用的token字符串
 * @param {String} name 接收人的用户名
 */
exports.sendActiveMail = function (who, token, name) {
    var from    = util.format('%s <%s>', config.name, config.mail_opts.auth.user);
    var to      = who;
    var subject = 'Activate Your Huami Account Today';
    var html    = '<p>Dear ' + name + '</p>' +
        '<p>Almost Done! Please click the following link to activate your Huami Account: </p>' +
        '<a href  = "' + SITE_ROOT_URL + '/active_account?key=' + token + '&name=' + name + '">Click here</a>' +
        '<p>' + config.name + '</p>';

    exports.sendMail({
        from: from,
        to: to,
        subject: subject,
        html: html
    });
};

/**
 * 发送密码重置通知邮件
 * @param {String} who 接收人的邮件地址
 * @param {String} token 重置用的token字符串
 * @param {String} name 接收人的用户名
 */
exports.sendResetPassMail = function (who, token, name) {
    var from = util.format('%s <%s>', config.name, config.mail_opts.auth.user);
    var to = who;
    var subject = config.name + '社区密码重置';
    var html = '<p>您好：' + name + '</p>' +
        '<p>我们收到您在' + config.name + '社区重置密码的请求，请在24小时内单击下面的链接来重置密码：</p>' +
        '<a href="' + SITE_ROOT_URL + '/reset_pass?key=' + token + '&name=' + name + '">重置密码链接</a>' +
        '<p>若您没有在' + config.name + '社区填写过注册信息，说明有人滥用了您的电子邮箱，请删除此邮件，我们对给您造成的打扰感到抱歉。</p>' +
        '<p>' + config.name + '社区 谨上。</p>';

    exports.sendMail({
        from: from,
        to: to,
        subject: subject,
        html: html
    });
};
