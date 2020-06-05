const fs = require('fs');
const path = require('path');
//通过__dirname获取当前文件所在的绝对路径
console.log(__dirname);
//path.join(__dirname,'demo.txt')当前文件的相对路径和当前文件的拼接
console.log(path.join(__dirname,'demo.txt'));
fs.readFile(path.join(__dirname,'demo.txt'),'utf8',(err,doc) =>{
	console.log(err);
	if(err == null){
		console.log(doc);
	}
});