var assert = require('assert');
var mixin = require('./factory');
var user = require('./user');
var msg = require('./msg');
var team = require('./team');

var Sdk = function(options){
    this._o = options || {};
    assert(this._o.appsecret, 'need nim app secret');
    assert(this._o.appkey,    'need nim app key');
    assert(this._o.logger,    'need logger');
};

mixin(Sdk, user);
mixin(Sdk, msg);
mixin(Sdk, team);

module.exports = Sdk;