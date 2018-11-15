

### 全局变量

- __dirname
 返回当前脚本执行目录

- __filename
 返回代码文件名称(绝对路径)

### 全局函数

- require
模块引入

- setTimeout
语法： setTimeout(cb,ms);

在指定毫秒ms 后执行指定函数cb; 执行一次
```
function clearTimer() {
    console.log('shutdown global timeTask')
    ...
}
setTimeout(clearTimer, 10*1000);

```


- setInterval

语法：setInterval(cb,ms);

延迟ms毫秒执行cb方法，循环执行


```
function timeTask() {
    console.log(new Date());
}

global.timerTasker = setInterval(timeTask, 3000);

```


### 全局对象
- console

log, info, error, warn, time, timeEnd
```
#time,timeEnd 用来打印程序执行时间

```

- module

 //TODO

- process

process是一个全局变量，是global对象的属性
用于描述当前node.js进行状态对象


```
# exits 事件
进程准备退出触发
// 退出事件
process.on('exit', (code)=>{
    console.log('即将退出，退出码' + code);
});


## process.abort
进程立即结束
process.abort();


## 查看内存使用情况
process.memoryUsage();

# 查看平台信息
process.platform

# 查看版本信息
process.version
```


### 自定义全局变量

```
#语法
xx.js
global.variable=${variable}
```


