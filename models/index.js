var mongoose = require('mongoose');
var config   = require('../config');
var logger = require('../common/logger')

var options = {
  server: { poolSize: 20 },
  user: config.db_username,
  pass: config.db_password
};

mongoose.connect(config.db, options, function (err) {
  if (err) {
    logger.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

// models
require('./user');
require('./topic');
require('./reply');
require('./topic_collect');
require('./message');

exports.User         = mongoose.model('User');
exports.Topic        = mongoose.model('Topic');
exports.Reply        = mongoose.model('Reply');
exports.TopicCollect = mongoose.model('TopicCollect');
exports.Message      = mongoose.model('Message');
