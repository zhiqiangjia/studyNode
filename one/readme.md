

### 概念
在一个node中，一个js文件就一个模块;

模块名称就是文件名(去掉.js后缀)

### 模块暴露方法

使用module.exports=${methodname}


示例：

hello.js模块； 对外暴露greet方法
```
..
function greet(name) {
    ..
}
module.exports=greet;
```

### 引用模块方法

语法结构 require('path/${module}')

路径应该是相对路径

示例：
main.js 引用hello模块greet方法

```
var greet = require('./hello');

greet('lilei');
```


### 多方法暴露和模块引入

语法结构: 

- 多方法暴露
```
function A(param) {
    ..
}
function B(param) {
    ..
}
module.exports={
  openNameA:A,
  openNameB:B
};
```

- 模块引入


```
var module = require('./${module}');

module.openNameA(a);
module.openNameB(b);
```



### 原理
node.js模块其实是使用了javascript闭包概念;
