// 假设头像目录为 public/uploads/avatar
//1，引入path模块
const path = require('path');
//2,调用path.join();API
let finalPath = path.join('public','uploads','avatar');

console.log(finalPath);
