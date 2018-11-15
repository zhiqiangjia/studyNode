

### 简介

node中 流(stream)抽象数据接口; 

分类：
- Readable : 可读
- Writeable ：可写
- Duplex： 可读可写
- Transform ：操作被写入数据，然后读出结果

特点：

所有的stream对象都是EventEmitter的示例

事件
- data (数据可读)
- end (没有数据可读)
- error
- finish (写入完成触发)

### 数据读取
- 1. 引入fs模块
- 2. 创建read流
- 3. 监听数据data事件

示例：
```
var fs = require('fs');
var rs = fs.createReadStream('./file/text.txt', 'utf-8');
rs.on('data', function(content){
    ..
});

```


### 数据写入
- 1. 引入fs系统
- 2. 创建输出流
- 3. 写入
- 4. 结束关闭

示例：

```
var fs = require('fs');

var ws = fs.createWriteStream('./file/output.txt', 'utf-8');
ws.write('---------node write stream write begin---------\n');
ws.write('the thing  study node before vue is very smart \n');
ws.write('node is build over javascript v8 \n');
ws.write('---------结束-------');
ws.end();

```


### 管道操作

```
rs.pipe(ws)
```


### 链式流

有些类似Java中的构建者模式； 运行流进行链式操作


示例


```
// 将input.txt 压缩为input.txt.gz

var zlib = require('zlib');

fs.createReadStream('./file/text.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./file/input.txt.gz'));

console.log('-----链式流压缩结束------');


//解压使用
rs.createReadStream('./file/input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('./file/text.txt'));
```


