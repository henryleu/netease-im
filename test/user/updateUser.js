/**
 * Created by henryleu on 9/6/16.
 */
var assert = require('chai').assert;
var nim = require('../sdk');
var codeDefs = require('../../lib/codeDefs');

describe('createUser', function(){

    describe('Succeed to create user', function(){
        // var accid = 'test-' + new Date().getTime();
        var accid = 'test-001';
        var name = accid;
        var token = 'a6ee36aa0d0856897ee96c0c13b15b83';

        it('Create a brand new user', function(done){
            var user = {
                accid: accid,
                name: name,
                props: JSON.stringify({type: 'test'}),
                icon: 'http://wx.qlogo.cn/mmopen/CyYbk1vmHvYCTpBHH4UiblcOM6IEMibm2VweVnbTm5tnWib1rQG5v6t7779AEnDSkFf212MXOVXX29JvZlKicjhUxjpRYDnTPTES/0'
            };
            nim.createUser(user, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });
    });

    describe('Fail to create an existed user', function(){
        var accid = 'test-002';
        var name = accid;
        var token = '5a0e469207f4bb1da92903cd808f35f3';

        before(function(done){
            var user = {
                accid: accid,
                name: name,
                props: JSON.stringify({type: 'test'}),
                icon: 'http://wx.qlogo.cn/mmopen/CyYbk1vmHvYCTpBHH4UiblcOM6IEMibm2VweVnbTm5tnWib1rQG5v6t7779AEnDSkFf212MXOVXX29JvZlKicjhUxjpRYDnTPTES/0'
            };
            nim.createUser(user, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });

        it('Fail with user error', function(done){
            var user = {
                accid: accid,
                name: name,
                props: JSON.stringify({type: 'test'}),
                icon: 'http://wx.qlogo.cn/mmopen/CyYbk1vmHvYCTpBHH4UiblcOM6IEMibm2VweVnbTm5tnWib1rQG5v6t7779AEnDSkFf212MXOVXX29JvZlKicjhUxjpRYDnTPTES/0'
            };
            nim.createUser(user, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.EXISTED_USER.code);
                done();
            });
        });
    });
});