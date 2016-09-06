var assert = require('assert');
var build = require('./factory');
var user = require('./user');
var msg = require('./msg');
var team = require('./team');

var Sdk = function(options){
    this._o = options || {};
    assert(this._o.appsecret, 'need nim app secret');
    assert(this._o.appkey,    'need nim app key');
    assert(this._o.logger,    'need logger');
};

build(Sdk, user.apis);
build(Sdk, msg.apis);
build(Sdk, team.apis);

Object.assign(Sdk, user.types);
Object.assign(Sdk, msg.types);
Object.assign(Sdk, team.types);

module.exports = Sdk;