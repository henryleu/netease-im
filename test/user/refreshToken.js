/**
 * Created by henryleu on 9/6/16.
 */
var assert = require('chai').assert;
var nim = require('../sdk');
var fixture = require('../fixture');
var codeDefs = require('../../lib/codeDefs');

describe.only('updateUser', function(){

    describe('Succeed to update a user', function(){
        var apple = fixture.userApple;

        it('Update a brand new user', function(done){
            var update = {
                accid: apple.id,
                token: apple.token,
                props: JSON.stringify({type: 'test-updated'})
            };
            nim.updateUser(update, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });
    });

});