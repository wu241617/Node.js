//a.js
//在模块内部定义变量
let version = 1.0;
//在模块内部定义方法
const sayHi = name => `您好，${name}`;
//向模块外部导出
exports.version = version;
exports.sayHi = sayHi;