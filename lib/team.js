/**
 * Created by henryleu on 9/6/16.
 */
var ApiDef = require('./api');
var apis = [];
var apiBaseUrl = 'https://api.netease.im/nimserver/team';

//创建高级群
var api = new ApiDef('createTeam',  apiBaseUrl + '/create.action');
apis.push(api);

//解散高级群
api = new ApiDef('deleteTeam',  apiBaseUrl + '/remove.action');
apis.push(api);

//更新高级群信息
api = new ApiDef('updateTeam',  apiBaseUrl + '/update.action');
apis.push(api);

//查询高级群信息列表
api = new ApiDef('queryTeams',  apiBaseUrl + '/query.action');
apis.push(api);

//拉人入群
api = new ApiDef('addTeamMember',  apiBaseUrl + '/add.action');
apis.push(api);

//踢人出群
api = new ApiDef('removeTeamMember',  apiBaseUrl + '/kick.action');
apis.push(api);

//移交群主
api = new ApiDef('changeTeamOwner',  apiBaseUrl + '/changeOwner.action');
apis.push(api);

//任命管理员
api = new ApiDef('addTeamManager',  apiBaseUrl + '/addManager.action');
apis.push(api);

//移除管理员
api = new ApiDef('removeTeamManager',  apiBaseUrl + '/removeManager.action');
apis.push(api);

//获取某用户所加入的群信息
api = new ApiDef('getJoinedTeams',  apiBaseUrl + '/joinTeams.action');
apis.push(api);

//修改群昵称
api = new ApiDef('updateTeamNickname',  apiBaseUrl + '/updateTeamNick.action');
apis.push(api);

//修改消息提醒开关
api = new ApiDef('muteTeam',  apiBaseUrl + '/muteTeam.action');
apis.push(api);

//禁言群成员
api = new ApiDef('muteTeamMember',  apiBaseUrl + '/muteTlist.action');
apis.push(api);

//主动退群
api = new ApiDef('leaveTeam',  apiBaseUrl + '/leave.action');
apis.push(api);




var types = {};

//被邀请人验证模式
types.inviteeApproveMode = {
    no: 0       //不需要验证
    , yes: 1    //需要验证
};

//主动申请加入验证模式
types.joinMode = {
    withoutApproving: 0     //不需要验证
    , withApproving: 1      //需要验证
    , forbidden: 2          //不允许任何人加入
};

//被邀请人同意方式
types.inviteeMode = {
    withApproving: 0        //不需要验证 (默认)
    , withoutApproving: 1   //需要验证
};

//谁可以邀请他人入群
types.inviterMode = {
    admin: 0     //管理员 (默认)
    , all: 1     //所有人
};

//谁可以修改群资料
types.updateMode = {
    admin: 0     //管理员 (默认)
    , all: 1     //所有人
};

//谁可以更新群自定义属性
types.updateCustomMode = {
    admin: 0    //管理员 (默认)
    , all: 1    //所有人
};

//查询群时是否带成员列表
types.queryFlag = {
    withMembers: 1      //带群成员列表
    , withoutMembers: 0 //不带群成员列表
};


module.exports = { apis: apis, types: types };;