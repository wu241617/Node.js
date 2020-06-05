//请求 fs 文件操作模块
const fs = require('fs');
//使用 fs.writeFile()文件写入API
//'./demo.txt' 当文件不存在的时候，创建
fs.writeFile('./demo.txt','即将要写入的内容',err => {
	if(err != null){
		console.log(err);
		return;
	}
	console.log('文件内容写入成功!');
});