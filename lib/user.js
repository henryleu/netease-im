/**
 * Created by henryleu on 9/6/16.
 */
var ApiDef = require('./api');
var apiBaseUrl = 'https://api.netease.im/nimserver/user';
var apis = [];
var types = {};

var api = new ApiDef('createUser',  apiBaseUrl + '/create.action');
apis.push(api);

api = new ApiDef('updateUser',  apiBaseUrl + '/update.action');
apis.push(api);

api = new ApiDef('refreshToken',  apiBaseUrl + '/refreshToken.action');
apis.push(api);

api = new ApiDef('blockUser',  apiBaseUrl + '/block.action');
apis.push(api);

api = new ApiDef('unblockUser',  apiBaseUrl + '/unblock.action');
apis.push(api);

module.exports = { apis: apis, types: types };