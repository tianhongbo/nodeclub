/**
 * Created by hongbotian on 1/8/16.
 */

var validator   = require('validator'); //validate and sanitize
var eventproxy  = require('eventproxy'); //convert nested callback into parallel events
var config         = require('../../config');
var User           = require('../../proxy').User;
var mail           = require('../../common/mail');
var tools          = require('../../common/tools');
var utility        = require('utility');
var authMiddleWare = require('../../middlewares/auth');
var uuid           = require('node-uuid');
var logger      = require('../../common/logger'); //log

exports.huami_showsignup = function(req, res) {
    res.render('huami/sign/huami-signup');
};

exports.huami_showlogin = function(req, res) {
    res.render('huami/sign/huami-login');
};


/**
 *
 * @param req
 * @param res
 * function: sign up handler
 */
exports.huami_signup = function(req, res, next) {
    var loginname = validator.trim(req.body.loginname).toLowerCase();
    var email     = validator.trim(req.body.email).toLowerCase();
    var pass      = validator.trim(req.body.pass);
    var rePass    = validator.trim(req.body.re_pass);

    logger.info(loginname, email, pass, rePass);

    var ep = new eventproxy();

    ep.fail(next); //listen error event, and callback "next" which is error handler

    //add listener to ep: 'prop_err' is customized event emitted by ep.emit
    ep.on('prop_err', function (msg) {
        res.status(422);
        res.render('sign/signup', {error: msg, loginname: loginname, email: email});
    });

    // validate sign up info
    if ([loginname, pass, rePass, email].some(function (item) { return item === ''; })) {
        ep.emit('prop_err', 'Some information is missing.');
        return;
    }

    if (!tools.validateId(loginname)) {
        return ep.emit('prop_err', 'User name is invalid.');
    }
    if (!validator.isEmail(email)) {
        return ep.emit('prop_err', 'e-mail is invalid.');
    }
    if (pass !== rePass) {
        return ep.emit('prop_err', 'two passwords are not same.');
    }


    //check in database
    User.getUsersByQuery({'$or': [
        {'loginname': loginname},
        {'email': email}
    ]}, {}, function (err, users) {
        if (err) {
            return next(err);
        }
        if (users.length > 0) {
            ep.emit('prop_err', 'User name or e-mail has been used.');
            return;
        }

        tools.bhash(pass, ep.done(function (passhash) {
            // create gravatar
            var avatarUrl = User.makeGravatar(email);
            User.newAndSave(loginname, loginname, passhash, email, avatarUrl, false, function (err) {
                if (err) {
                    return next(err);
                }
                // send active mail to user's e-mail box
                mail.sendActiveMail(email, utility.md5(email + passhash + config.session_secret), loginname);
                res.render('sign/signup', {
                    success: 'Welcome ' + config.name + '! We have sent one e-amil to your registered e-mail address, ' +
                    'and please click the link to activate your account.'
                });
            });

        }));
    });
};