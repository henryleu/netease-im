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


describe.only('addAndRemoveMember', function(){
    var apple = fixture.userApple;
    var banana = fixture.userBanana;
    var coconut = fixture.userCoconut;
    var durian = fixture.userDurian;
    var tid = null;

    before(function(done){
        var result = null;
        co(function*(){
            try{
                //create a team
                var createForm = {
                    owner: apple.id
                    , members: JSON.stringify([apple.id, durian.id])
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

                done();
            }
            catch(e){
                console.error(err);
                assert.ok(false);
            }
        });
    });

    after(function(done){
        var result = null;
        co(function*(){
            try{
                //delete the team
                deleteForm = {
                    tid: tid
                    , owner: apple.id
                };
                result = yield nim.deleteTeamAsync(deleteForm);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);

                done();
            }
            catch(e){
                console.error(err);
                assert.ok(false);
            }
        });
    });

    it('add a, remove a, add a again, and remove a again', function(done){
        var result = null;
        var form = null;
        var queryForm = null;

        co(function*(){
            try{

                //query the team
                queryForm = {
                    tids: JSON.stringify([tid]),
                    ope:  queryFlag.withMembers
                };
                result = yield nim.queryTeamsAsync(queryForm);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                teams = result.tinfos;
                console.info(teams[0]);
                assert.deepEqual(teams[0].members, [durian.id]);

                //add a team member
                form = {
                    tid: tid
                    , owner: apple.id
                    , members: JSON.stringify([banana.id])
                    , msg: '邀请你参加局 - 周末去撸串啊!'
                    , magree: inviteeApproveMode.no
                    , attach: JSON.stringify({type: 'private'})
                };
                result = yield nim.addTeamMemberAsync(form);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);

                //query the team
                queryForm = {
                    tids: JSON.stringify([tid]),
                    ope:  queryFlag.withMembers
                };
                result = yield nim.queryTeamsAsync(queryForm);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                teams = result.tinfos;
                console.info(teams[0]);
                assert.deepEqual(teams[0].members, [durian.id, banana.id]);

                //remove a team member
                form = {
                    tid: tid
                    , owner: apple.id
                    , member: banana.id
                    , attach: JSON.stringify({type: 'public'})
                };
                result = yield nim.removeTeamMemberAsync(form);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);

                //query the team
                queryForm = {
                    tids: JSON.stringify([tid]),
                    ope:  queryFlag.withMembers
                };
                result = yield nim.queryTeamsAsync(queryForm);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                teams = result.tinfos;
                console.info(teams[0]);
                assert.deepEqual(teams[0].members, [durian.id]);

                //add a team member
                form = {
                    tid: tid
                    , owner: apple.id
                    , members: JSON.stringify([banana.id])
                    , msg: '邀请你参加局 - 周末去撸串啊!'
                    , magree: inviteeApproveMode.no
                    , attach: JSON.stringify({type: 'private'})
                };
                result = yield nim.addTeamMemberAsync(form);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);

                //query the team
                queryForm = {
                    tids: JSON.stringify([tid]),
                    ope:  queryFlag.withMembers
                };
                result = yield nim.queryTeamsAsync(queryForm);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                teams = result.tinfos;
                console.info(teams[0]);
                assert.deepEqual(teams[0].members, [durian.id, banana.id]);

                //remove a team member
                form = {
                    tid: tid
                    , owner: apple.id
                    , member: banana.id
                    , attach: JSON.stringify({type: 'public'})
                };
                result = yield nim.removeTeamMemberAsync(form);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);

                //query the team
                queryForm = {
                    tids: JSON.stringify([tid]),
                    ope:  queryFlag.withMembers
                };
                result = yield nim.queryTeamsAsync(queryForm);
                console.info(result);
                assert.equal(result.code, codeDefs.OK.code);
                teams = result.tinfos;
                console.info(teams[0]);
                assert.deepEqual(teams[0].members, [durian.id]);

                done();
            }
            catch(e){
                console.error(err);
                assert.ok(false);
            }
        });

    });

});