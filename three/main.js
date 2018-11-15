'use strict';
// 1. 函数嵌套
function f1(f2, name, sex, phone) {
    f2(name, sex, phone);
}

function f2(name, sex, phone) {
    console.log('姓名: ' + name);
    console.log('性别: ' + sex);
    console.log('手机号： ' + phone);
}

f1(f2, 'jiazhiqiang', 'man', 18320928860);

// 2.匿名函数
function f3(anonyMethod, name, sex, phone) {
    anonyMethod(name, sex, phone);
}

f3(
    function(name, sex, phone){
        console.log('name: '+ name);
        console.log('sex: '+ sex);
        console.log('phone: '+ phone);
    }, 
    'jiazhiqiang',
    'man',
    '18320928860');

// 3. 匿名在http中的使用
    var http = require('http');
    http.createServer(function(request, response){
        console.log(request.headers.host);

        console.log(request.url);


        response.writeHead(200, {"content-type":'text/plain'});
        response.write("hello node http server");
        response.end();
    }).listen(8080);