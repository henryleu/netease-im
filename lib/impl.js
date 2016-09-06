/**
 * Created by henryleu on 9/6/16.
 */
var request = require('request');
var crypto = require('crypto');
var nimCodes = require('./codes');

var INFRASTRUCTURE_ERROR = {
    code: 190, desc: '[云信API基础设施错误] - '
};

var PARSE_ERROR = {
    code: 191, desc: '[云信API响应解析错误] - '
};

var genNonce = function(len) {
    return crypto.randomBytes(len).toString('hex');
};

var genChecksum = function(appsecret, nonce, curtime){
    var raw = appsecret + nonce + curtime;
    var hasher = crypto.createHash("sha1");
    return hasher.update(raw).digest('hex');
};

var getHeaders = function(appsecret, appkey){
    var nonce = genNonce(64);
    var curtime = Math.floor(new Date().getTime()/1000);
    var checksum = genChecksum(appsecret, nonce, curtime);
    return {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'AppKey': appkey,
        Nonce: nonce,
        CurTime: curtime,
        CheckSum: checksum
    };
};

var postProcessResponse = function(err, body){
    var result = null;

    if(err){
        result = { code: INFRASTRUCTURE_ERROR.code,  desc: INFRASTRUCTURE_ERROR.desc + err };
    }
    else{
        try{
            result = JSON.parse(body);
            if(result.code!=200){
                var errmsg = nimCodes[''+result.code];
                errmsg && (result.desc = '[' + errmsg + '] - ' + result.desc);
            }
        }
        catch(e){
            result = { code: PARSE_ERROR.code, desc: PARSE_ERROR.desc + e };
        }
    }

    return result;
};

module.exports = function(url, name, options){
    var logger      = options.logger;
    var appsecret   = options.appsecret;
    var appkey      = options.appkey;

    return function(form, callback){
        var headers = getHeaders(appsecret, appkey);
console.log(headers);
        if(logger.isDebugEnabled()){
            logger.debug(name + ' -  input - ' + JSON.stringify(form));
        }

        request.post({url: url, form: form, headers: headers},
            function (err, response, body) {
                var result = postProcessResponse(err, body);

                //Print error log
                if(result.code == INFRASTRUCTURE_ERROR.code || result.code == PARSE_ERROR.code){
                    logger.error(name + ' - output - ' + JSON.stringify(result));
                }

                //Print debug log if enabled
                if(logger.isDebugEnabled()){
                    logger.debug(name + ' - output - ' + JSON.stringify(result));
                }
                if (callback) callback(null, result);
            });
    };
};