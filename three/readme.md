

### 嵌套函数
javascript ，一个函数可以作为另一个函数的参数。

一个函数可以作为另外一个函数的参数

- 语法

```
function f1(f2name, param) {
    f2(param);
}

```

- 示例


```
function f1(f2, name, sex, phone) {
    f2(name, sex, phone);
}

function f2(name, sex, phone) {
    console.log('姓名: ' + name);
    console.log('性别: ' + sex);
    console.log('手机号： ' + phone);
}
```



### 匿名函数



- 语法

```
function f1 (anony, param) {
    anony(param);
}

f1(function(param){..}, param);
```

- 示例

```
function f3(anonyMethod, name, sex, phone) {
    anonyMethod(name, sex, phone);
}

f1(f2, 'jiazhiqiang', 'man', 18320928860);

f3(
    function(name, sex, phone){
        console.log('name: '+ name);
        console.log('sex: '+ sex);
        console.log('phone: '+ phone);
    }, 
    'jiazhiqiang',
    'man',
    '18320928860');
```


### 匿名在http中的使用


```
var http = require('http');
    http.createServer(function(request, response){
        console.log(request.headers.host);

        console.log(request.url);


        response.writeHead(200, {"content-type":'text/plain'});
        response.write("hello node http server");
        response.end();
    }).listen(8080);
```
