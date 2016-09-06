/**
 * Created by henryleu on 9/6/16.
 */
var util = require('util');
var assert = require('assert');
var newApiRequest = require('./inpl');


var generateApiFunc = function(api){
    var apiFunc = function(form, callback){
        var req = newApiRequest(api.endpoint, api.name, this._o);
        req(form, callback);
    };
    apiFunc.name = api.name;
    apiFunc.endpoint = api.endpoint;
    return apiFunc;
};

module.exports = function(sdkConstructor, apiList){
    assert(sdkConstructor instanceof Function, 'sdk constructor should be a function');
    assert(Array.isArray(apiList), 'apiList should be an array ');

    var moduleProto = {};
    var len = apiList.length;
    var i = 0;
    var api = null;
    for(; i<len; i++){
        api = apiList[i];
        moduleProto[api.name] = generateApiFunc(api);
    }
    util.inherits(sdkConstructor.prototype, moduleProto);
};