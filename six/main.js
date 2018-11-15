'use strict';
// 1. 文件系统的引入
var fs = require('fs');

// 读取目录文件

fs.readdir("./", function(err, files){
    if(err){
        return console.error(err);
    }
     files.forEach(function(file){
        console.log(file);
        var filename = './'+file;
        console.log(filename);
        fs.stat(filename, function(err, stat){
            console.log("是否问目录：" + stat.isDirectory());
        });
    });

});

var isexists = fs.existsSync('./file/');
 console.log('file 目录是否存在' + isexists);
 // 创建目录
 if (!isexists) {
    fs.mkdir('./file/', function(err){
        if (err) {
            return console.error(err);
        }
        console.log("目录创建成功。")
    });
 }

 if(fs.existsSync('./abc/')) {
    fs.rmdir('./abc/',function(err){
        if (err) {
            return console.error(err);
        }
        console.log("目录删除成功。")
     });
 }

// 创建output.txt
fs.openSync('./file/output.txt', 'w+');

var data = 'this lession is introduce file system';
 
fs.writeFile('./file/output.txt', data, function(err){
    if(err) {

    } else {
        console.log('异步写入成功');
    }
});


// 同步读取数据

// 异步读取数据
fs.readFile('./file/output.txt', function(err,content){
    console.log("异步读取：" + content);
});



