/**
 * Created by henryleu on 9/6/16.
 */
var assert = require('chai').assert;
var nim = require('../sdk');
var fixture = require('../fixture');
var codeDefs = require('../../lib/codeDefs');

describe('unblockUser', function(){

    describe('unblock a blocked user', function(){

        before(function(done){
            var coconut = fixture.userCoconut;
            var form = {
                accid: coconut.id
            };
            nim.blockUser(form, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });

        it('Succeed to unblock a blocked user', function(done){
            var coconut = fixture.userCoconut;
            var form = {
                accid: coconut.id
            };
            nim.unblockUser(form, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });

    });

    describe('repeat to unblock a unblocked user', function(){

        before(function(done){
            var coconut = fixture.userCoconut;
            var form = {
                accid: coconut.id
            };
            nim.unblockUser(form, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });

        it('Succeed to unblock a unblock user', function(done){
            var coconut = fixture.userCoconut;
            var form = {
                accid: coconut.id
            };
            nim.unblockUser(form, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });

    });

});