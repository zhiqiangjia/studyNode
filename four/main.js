'use strict';
// author : jiazhiqiang
// 2018-11-15

console.log("author: jiazhiqiang");
console.log('-- study node stream  start ---');


// 1. 引入 fs 模块
var fs = require('fs');
// 2. 创建read流
var rs = fs.createReadStream('./file/text.txt','utf-8');
// 3. 监听数据data事件
rs.on('data', function(content) {
    console.log(content);
});
// 4. 监听数据end事件
rs.on('end', function(){
    console.log('文件读取结束');
});
// 5. 监听数据error事件
rs.on('error', function(err){
    console.log('ERROR:' + err);
});


console.log('--------------------');


var ws = fs.createWriteStream('./file/output.txt', 'utf-8');
ws.write('---------node write stream write begin---------\n');
ws.write('the thing  study node before vue is very smart \n');
ws.write('node is build over javascript v8 \n');
ws.write('---------结束-------');
ws.end();



console.log('-------- 管道开始--------------')

var txtoutput = fs.createWriteStream('./file/textoutput.txt', 'utf-8');
rs.pipe(txtoutput);





console.log('--------- 链式流开始-----------');

// 将input.txt 压缩为input.txt.gz

var zlib = require('zlib');

fs.createReadStream('./file/text.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./file/input.txt.gz'));

console.log('-----链式流压缩结束------');









console.log('-- study node stream  end ---');



