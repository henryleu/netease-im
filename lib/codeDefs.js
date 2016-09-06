/**
 * Created by henryleu on 3/31/16.
 */
var codes = require('./codes');
var defs = {};

var CodeDef = function(code){
    this.code = code
    this.desc = codes[''+code];
};

defs.OK = new CodeDef(200);

defs.WRONG_PARAMETERS = new CodeDef(414); //参数错误

defs.EXISTED_USER = new CodeDef(414); //创建用户时传入的 accid 已存在

defs.NOT_EXISTED_USER = new CodeDef(414); //刷新token时传入的 accid 不存在


module.exports = defs;