/**
 * Created by henryleu on 9/6/16.
 */
var assert = require('chai').assert;
var nim = require('../sdk');
var fixture = require('../fixture');
var Nim = require('../../lib');
var codeDefs = require('../../lib/codeDefs');

var msgTypes = Nim.msgTypes;
var targetTypes = Nim.targetTypes;
var msgOptions = Nim.msgOptions;

describe('sendMsg', function(){

    describe('text', function(){
        var apple = fixture.userApple;
        var banana = fixture.userBanana;

        it('send text to individual', function(done){
            var form = {
                from:   apple.id,
                to:     banana.id,
                ope:    targetTypes.individual,
                type:   msgTypes.text,
                body:   JSON.stringify({msg: '你好!'}),
                option:   JSON.stringify(msgOptions)
            };

            nim.sendMsg(form, function(err, result){
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

        it('send location to individual', function(done){
            var form = {
                from:   apple.id,
                to:     banana.id,
                ope:    targetTypes.individual,
                type:   msgTypes.location,
                body:   JSON.stringify({
                    "title": "中国 浙江省 杭州市 网商路 599号",
                    "lng": 120.1908686708565,
                    "lat": 30.18704515647036
                }),
                option: JSON.stringify(msgOptions)
            };

            nim.sendMsg(form, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });
    });
});