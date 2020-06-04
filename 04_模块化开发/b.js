//b.js
//在b.js模块中导入模块a
let a = require('./a.js');//require返回值是导入模块的exports
//在b.js模块中导入模块c
let c = require('./c.js');
//输出a模块
console.log(a);
//输出c模块
console.log(c);
//输出a模块中的version变量
console.log(a.version);
//输出a模块里面的sayHi方法，并返回其返回值
console.log(a.sayHi('wuhao'));
//输出c模块里面的greeting方法，并返回其返回值
//console.log(c.greeting('lijun'));
