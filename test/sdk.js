/**
 * Created by henryleu on 9/6/16.
 */
var Nim = require('../lib');
var config = require('./config');
var log4js = require('log4js');
log4js.loadAppender('console');
var logger = log4js.getLogger('console');
logger.setLevel('DEBUG');


var nim = new Nim({
    appsecret: config.appsecret,
    appkey: config.appkey,
    logger: logger
});

module.exports = nim;