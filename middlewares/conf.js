var config = require('../config1');

exports.github = function (req, res, next) {
  if (config.GITHUB_OAUTH.clientID === 'your GITHUB_CLIENT_ID') {
    return res.send('call the admin to set github oauth.');
  }
  next();
};
