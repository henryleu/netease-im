/**
 * Created by henryleu on 9/6/16.
 */
var assert = require('chai').assert;
var nim = require('../sdk');
var fixture = require('../fixture');
var Nim = require('../../lib');
var codeDefs = require('../../lib/codeDefs');

var targetTypes = Nim.targetTypes;
var saveModes = Nim.saveModes;
var msgOptions = Nim.msgOptions;

describe('sendAttachMsg', function(){

    describe('text', function(){
        var apple = fixture.userApple;
        var banana = fixture.userBanana;

        it('send text to individual', function(done){
            var form = {
                from:   apple.id,
                to:     banana.id,
                msgtype:targetTypes.individual,
                save:   saveModes.offline,
                attach:   JSON.stringify({msg: '你好!'})
            };

            nim.sendAttachMsg(form, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });
    });

});