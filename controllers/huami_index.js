/**
 * Created by hongbotian on 1/15/16.
 */

var path = require('path');

exports.huami_index = function(req, res){

    //index.html locates at /public
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
};