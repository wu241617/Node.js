const greeting = name => `hello ${name}`;
const x = 100;
//模块导出
exports.x = x;
//模块导出
module.exports.greeting = greeting;
//模块导出
//当exports对象和module.exports对象指向的不是同一个对象时，以module.exports为准。
exports = {//不生效，以module.exports为准。
	name:'zhangsan'
}
module.exports = {//新创建一个对象，做赋值
	name:'wuhao'
}