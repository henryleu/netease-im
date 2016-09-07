/**
 * Created by henryleu on 9/6/16.
 */
var assert = require('chai').assert;
var nim = require('../sdk');
var fixture = require('../fixture');
var Nim = require('../../lib');
var codeDefs = require('../../lib/codeDefs');

var msgTypes = Nim.msgTypes;
var msgOptions = Nim.msgOptions;

describe('sendBatchMsg', function(){

    describe('text', function(){
        var apple = fixture.userApple;
        var banana = fixture.userBanana;
        var coconut = fixture.userCoconut;
        var durian = fixture.userDurian;

        it('send text to list of users', function(done){
            var form = {
                fromAccid:  apple.id,
                toAccids:   JSON.stringify([banana.id, coconut.id, durian.id]),
                type:       msgTypes.text,
                body:       JSON.stringify({msg: '你好!'}),
                option:     JSON.stringify(msgOptions)
            };

            nim.sendBatchMsg(form, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });
    });

    describe('location', function(){
        var apple = fixture.userApple;
        var banana = fixture.userBanana;
        var coconut = fixture.userCoconut;
        var durian = fixture.userDurian;

        it('send location to individual', function(done){
            var form = {
                fromAccid:  apple.id,
                toAccids:   JSON.stringify([banana.id, coconut.id, durian.id]),
                type:       msgTypes.location,
                body:   JSON.stringify({
                    "title": "中国 浙江省 杭州市 网商路 599号",
                    "lng": 120.1908686708565,
                    "lat": 30.18704515647036
                }),
                option:     JSON.stringify(msgOptions)
            };

            nim.sendBatchMsg(form, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });
    });
});