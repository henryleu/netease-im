## netease-im

It is Netease IM server-side SDK for node.js. using it, you can develop instant messaging Apps (iOS and Android) backed by server side services in node.js 

##Supported APIs
- **User Account**: Create, delete, update, block and unblock user account. 
- **Messaging**: Send many kinds of message to user or user list, also send system notification message.
- **Group**: Create, delete, update and query teams, also add and remove members to/from team.
- **Others**: coming soon.

For more api information, you can reference [Netease IM API Docs](http://dev.netease.im/docs?doc=server)

## Installation

```javascript
npm install netease-im

```

## Quick Start

```javascript
    var Promise = require('bluebird');
    var config = require('./config');
    var log4js = require('log4js');
    var logger = log4js.getLogger();
    logger.setLevel('DEBUG');
    
    
    var nim = new Nim({
        appsecret: config.appsecret,
        appkey: config.appkey,
        logger: logger
    });

    var userForm = {
        accid: accid,
        name: name,
        props: JSON.stringify({type: 'test'}),
        icon: 'http://wx.qlogo.cn/mmopen/CyYbk1vmHvYCTpBHH4UiblcOM6IEMibm2VweVnbTm5tnWib1rQG5v6t7779AEnDSkFf212MXOVXX29JvZlKicjhUxjpRYDnTPTES/0'
    };

    nim.createUser(userForm, function(err, result){
        ...
    });
```

## Tests & Examples

For more example code, see `netease-im/test`

License
-------

MIT License. A copy is included with the source.

Contact
-------

* GitHub ([henryleu](http://github.com/henryleu))
* Wechat ([kingkongslove](https://github.com/henryleu/netease-im/blob/master/kinglongslove.jpg))
* QQ ([1347653](1347653))
* Email ([henryleu@126.com](mailto:henryleu@126.com))


Any advices or questions, contact me:

![henryleu's wechat](https://github.com/henryleu/netease-im/blob/master/kinglongslove.jpg)
