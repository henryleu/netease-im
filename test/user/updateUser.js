/**
 * Created by henryleu on 9/6/16.
 */
var assert = require('chai').assert;
var nim = require('../sdk');
var fixture = require('../fixture');
var codeDefs = require('../../lib/codeDefs');

describe('updateUser', function(){

    it('Succeed to update a user', function(done){
        var apple = fixture.userApple;
        var form = {
            accid: apple.id,
            token: apple.token,
            props: JSON.stringify({type: 'test-updated'})
        };
        nim.updateUser(form, function(err, result){
            err && console.error(err);
            console.info(result);
            assert.equal(result.code, codeDefs.OK.code);
            done();
        });
    });

});