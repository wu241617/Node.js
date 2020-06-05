//引用gulp模块
const gulp = require('gulp');
//引入各种插件
const htmlmin = require('gulp-htmlmin');
const fileInclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
//使用gulp.task建立任务
//参数1，任务名称；参数2，人物的回调函数
gulp.task('first',() => {
	console.log('第一个gulp任务执行了');
	//使用gulp.src获取要处理的文件
	gulp.src('./src/css/css.css')
	    //使用gulp.dest输出处理完的文件
		.pipe(gulp.dest('dist/css'))
});
//html任务
//1.html文件中代码的压缩操作
//2.抽离html文件中的公共代码
gulp.task('htmlmin',() => {
	gulp.src('./src/*.html')
	    //抽离html文件中的公共代码
	    //.pipe(fileInclude())
	    //压缩html文件中的代码
		.pipe(htmlmin({collapseWhitespace:true}))
		.pipe(gulp.dest('dist'))
});
//css任务
//1.less语法的转化
//2.css代码压缩
gulp.task('cssmin',()=>{
	//所有的css和less文件
	gulp.src(['./src/css/a.less','./src/css/css.css'])
		//将less转换未css
		.pipe(less())
		//压缩CSS代码
		.pipe(csso())
		//将处理结果输出
		.pipe(gulp.dest('dist/css'))
});
//JavaScript任务
//1.ES6代码装换
//2.代码压缩
gulp.task('jsmin',()=>{
	gulp.src('./src/js/*.js')
	    //ES6语法转换
		.pipe(babel({
			//它可以判断当前代码的运行环境，将代码装换为当前环境运行所支持的代码
			presets:['@babel/env'],
			}))
		//JS代码压缩
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});
//复制文件夹
gulp.task('copy',()=>{
	gulp.src('./src/img/*')
		.pipe(gulp.dest('dist/img'))
});
//构建任务
gulp.task('default',['htmlmin','cssmin','jsmin','copy'])