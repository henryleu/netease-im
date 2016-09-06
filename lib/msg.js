/**
 * Created by henryleu on 9/6/16.
 */
var ApiDef = require('./api');
var apiBaseUrl = 'https://api.netease.im/nimserver/msg';
var apis = [];
var types = {};

var api = new ApiDef('sendMsg',  apiBaseUrl + '/sendMsg.action');
apis.push(api);

api = new ApiDef('sendBatchMsg',  apiBaseUrl + '/sendBatchMsg.action');
apis.push(api);

api = new ApiDef('sendAttachMsg',  apiBaseUrl + '/sendAttachMsg.action');
apis.push(api);

api = new ApiDef('sendBatchAttachMsg',  apiBaseUrl + '/sendBatchAttachMsg.action');
apis.push(api);


types.msgOptions = {
    "push":         true, 
    "roam":         true, 
    "history":      true,
    "sendersync":   true,
    "route":        false,
    "badge":        true,
    "needPushNick": false
};


types.msgTypes = {
    text:       0   //表示文本消息
    , image:    1   //表示图片
    , voice:    2   //表示语音
    , video:    3   //表示视频
    , location: 4   //表示地理位置信息
    , file:     6   //表示文件
    , custom: 100   //自定义消息类型
};

types.customMsgTypes = {
    tips:       'tips'   //表示系统提示消息,以群主代替系统身份发的提示消息
    , invitation:    'invite'   //表示局邀请
};

types.targetTypes = {
    individual: 0   //表示个体
    , group:    1   //表示群组
};

types.saveModes = {
    online:     1   //表示: 只发在线
    , offline:  2   //表示: 会存离线
};

module.exports = { apis: apis, types: types };