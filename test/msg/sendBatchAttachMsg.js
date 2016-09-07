/**
 * Created by henryleu on 9/6/16.
 */
var assert = require('chai').assert;
var nim = require('../sdk');
var fixture = require('../fixture');
var Nim = require('../../lib');
var codeDefs = require('../../lib/codeDefs');

var saveModes = Nim.saveModes;
var msgOptions = Nim.msgOptions;

describe('sendBatchAttachMsg', function(){

    describe('text', function(){
        var apple = fixture.userApple;
        var banana = fixture.userBanana;
        var coconut = fixture.userCoconut;
        var durian = fixture.userDurian;

        it('send text to list of users', function(done){
            var form = {
                fromAccid:  apple.id,
                toAccids:   JSON.stringify([banana.id, coconut.id, durian.id]),
                save:       saveModes.offline,
                attach:     JSON.stringify({msg: '你好!'}),
                option:     JSON.stringify(msgOptions)
            };

            nim.sendBatchAttachMsg(form, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });
    });

});