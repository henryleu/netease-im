/**
 * Created by henryleu on 9/6/16.
 */
var assert = require('chai').assert;
var nim = require('../sdk');
var fixture = require('../fixture');
var codeDefs = require('../../lib/codeDefs');

describe('refreshToken', function(){

    it('Succeed to refresh a user\'s token', function(done){
        var durian = fixture.userDurian;
        var form = {
            accid: durian.id
        };
        nim.refreshToken(form, function(err, result){
            err && console.error(err);
            console.info(result);
            assert.equal(result.code, codeDefs.OK.code);
            done();
        });
    });

});