//1,通过模块的名字 fs 对模块进行引用。
const fs = require('fs');
//2,通过模块内部的readFile方法读取文件内容
fs.readFile('./index.html','utf8',(err,doc) => {
	//如果文件读取出错，err是一个对象，包含错误信息
	//如果文件读取成功，err是null
	//doc 是文件读取的结果
	console.log(err);
	if(err == null){
		console.log(doc);
	}
});