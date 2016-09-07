/**
 * Created by henryleu on 9/6/16.
 */
var assert = require('chai').assert;
var co = require('co');
var nim = require('../sdk');
var fixture = require('../fixture');
var Nim = require('../../lib');
var codeDefs = require('../../lib/codeDefs');

var inviteeApproveMode = Nim.inviteeApproveMode;
var joinMode = Nim.joinMode;
var inviteeMode = Nim.inviteeMode;
var inviterMode = Nim.inviterMode;
var updateMode = Nim.updateMode;
var updateCustomMode = Nim.updateCustomMode;
var queryFlag = Nim.queryFlag;


describe('crudTeam', function(){

    it('create read update and delete a team', function(done){
        var apple = fixture.userApple;
        var banana = fixture.userBanana;
        var coconut = fixture.userCoconut;
        var durian = fixture.userDurian;
        var result = null;
        var tid = null;
        var teams = null;

        co(function*(){
            try{
                //create a team
                var createForm = {
                    owner: apple.id
                    , members: JSON.stringify([banana.id, coconut.id, durian.id])
                    , msg: '好久没聚了, 赶紧来吧'
                    , tname: '周末去撸串啊!'
                    , magree: inviteeApproveMode.no
                    , joinmode: joinMode.withoutApproving
                    , beinvitemode: inviteeMode.withoutApproving
                    , invitemode: inviterMode.admin
                    , uptinfomode: updateMode.admin
                    , upcustommode: updateCustomMode.admin

                };
                result = yield nim.createTeamAsync(createForm);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                tid = result.tid;

                //query created team
                var queryForm = {
                    tids: JSON.stringify([tid]),
                    ope:  queryFlag.withMembers
                };
                result = yield nim.queryTeamsAsync(queryForm);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                teams = result.tinfos;
                assert.equal(teams[0].tname, createForm.tname);

                //update a team
                var updateForm = {
                    tid: tid
                    , owner: apple.id
                    , tname: '周末去撸串啊! - updated'
                    , joinmode: joinMode.withoutApproving
                    , beinvitemode: inviteeMode.withoutApproving
                    , invitemode: inviterMode.admin
                    , uptinfomode: updateMode.admin
                    , upcustommode: updateCustomMode.admin

                };
                result = yield nim.updateTeamAsync(updateForm);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);

                //query updated team
                queryForm = {
                    tids: JSON.stringify([tid]),
                    ope:  queryFlag.withMembers
                };
                result = yield nim.queryTeamsAsync(queryForm);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                teams = result.tinfos;
                assert.equal(teams[0].tname, updateForm.tname);

                //delete the team
                deleteForm = {
                    tid: tid
                    , owner: apple.id
                };
                result = yield nim.deleteTeamAsync(deleteForm);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);

                //query deleted team
                queryForm = {
                    tids: JSON.stringify([tid]),
                    ope:  queryFlag.withMembers
                };
                result = yield nim.queryTeamsAsync(queryForm);
                console.info(result);
                assert.equal(result.code, codeDefs.WRONG_PARAMETERS.code);

                done();
            }
            catch(e){
                console.error(err);
                assert.ok(false);
            }
        });

    });

});