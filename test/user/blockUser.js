/**
 * Created by henryleu on 9/6/16.
 */
var assert = require('chai').assert;
var nim = require('../sdk');
var fixture = require('../fixture');
var codeDefs = require('../../lib/codeDefs');

describe('blockUser', function(){

    describe('block a unblocked user', function(){

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

        it('Succeed to block a unblocked user', function(done){
            var coconut = fixture.userCoconut;
            var form = {
                accid: coconut.id,
                needkick: false
            };
            nim.blockUser(form, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });

    });

    describe('repeat to block a blocked user', function(){

        before(function(done){
            var coconut = fixture.userCoconut;
            var form = {
                accid: coconut.id,
                needkick: true
            };
            nim.blockUser(form, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });

        it('Succeed to block a blocked user', function(done){
            var coconut = fixture.userCoconut;
            var form = {
                accid: coconut.id,
                needkick: false
            };
            nim.blockUser(form, function(err, result){
                err && console.error(err);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                done();
            });
        });

    });

});