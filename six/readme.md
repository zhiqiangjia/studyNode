

### 简述
node 文件系统，主要用于文件读写操作
支持同步和异步方式

### 文件系统的引入

```
var fs = require('fs');
```

### 目录

- 创建 mkdir

```
#语法：
fs.mkdir(path, function(err){
    
});
```
- 读取 readdir

```
#语法：

fs.readdir(path, function(err, files){
    ..
})
```

- 删除 rmdir

```
fs.rmdir(path, function(err){
    
})
```




### 文件

- 创建文件 openSync

```
# 语法：
fs.openSync(path， 'w+');
```



- 异步写入 writeFile

 
```
fs.writeFile(path, data, function(err){
    
});
```

- 同步写入 writeFileSync(filename, data)


- 异步读取 readFile

```
语法：
fs.readFile(path, function(err, data){
    ..
});
```


### 文件信息

- 读取文件信息 stat


```
fs.stat(path, function(err, stat){
    
})
```

- 判读是否是文件 stat.isFile()
- 判断是否是目录 stat.isDirectory()
- 创建事件 stat.birthtime;
- 文件大小 stat.size
