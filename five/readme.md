

### 简介

node 特点是点进程，但底层引擎v8提供“异步回调接口”; 通过异步回调可以处理大量并发，所以性能非常高；

- 所有API都支持回调函数
- 所有时间都是用观察者模式实现
- 每个异步事件都生成一个事件观察者


### 使用方式
- 引入events模块

```
equire('events');
```

- 创建eventEmitter监听事件

```
var eventEmitter = new events.eventEmitter();
```

- 事件绑定

```
eventEmitter.on('eventname', function(){});
```

- 事件触发

```
eventEmitter.emit('eventname');
```


### 示例
```
// 1. events模块引入
var events = require('events');
// 2. 声明eventEmitter
var eventEmitter = new events.EventEmitter();

// 3. 监听say事件
eventEmitter.on('say', function(people,content) {
    console.log(people + " say: " + content );
    // 4. 触发resp事件
    eventEmitter.emit('resp', people);
});
// 3. 监听resp事件
eventEmitter.on('resp', function(name) {
    console.log(" welcome " + name+" to node world~" );
});
// 4. 触发say事件
eventEmitter.emit('say', 'jiazq', ' hello node');
```


### eventEmitter其他方法

- addListener

 添加事件监听器
- listenerCount

 统计事件监听器
 
- removeListener

 删除事件监听器
 
 
 
```

var listenerOne = function listenerOne(param1, param2) {
    console.log("listenerOne: " +param1 + param2);
}  

var lisenerTwo = function listenerTwo(param1, param2) {
    console.log("listenerTwo: " +param1 + param2);
}

console.log("--say事件的监听器数量:" + eventEmitter.listenerCount("say"));

eventEmitter.addListener('say',listenerOne);
eventEmitter.addListener('say',lisenerTwo);

console.log("--say事件的监听器数量:" + eventEmitter.listenerCount("say"));

eventEmitter.emit('say', 'quinn', ' hello node');


```
