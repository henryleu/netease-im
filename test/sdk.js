/**
 * Created by henryleu on 9/6/16.
 */
var Nim = require('../lib');
var Promise = require('bluebird');
var config = require('./config');
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.setLevel('DEBUG');


var nim = new Nim({
    appsecret: config.appsecret,
    appkey: config.appkey,
    logger: logger
});

module.exports = Promise.promisifyAll(nim);