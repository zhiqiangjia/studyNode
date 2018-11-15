'use strict';


console.log("author: jiazhiqiang");

var listenerOne = function listenerOne(param1, param2) {
    console.log("listenerOne: " +param1 + param2);
}  

var lisenerTwo = function listenerTwo(param1, param2) {
    console.log("listenerTwo: " +param1 + param2);
}

console.log('----study eventEmitter start---');
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



console.log("--say事件的监听器数量:" + eventEmitter.listenerCount("say"));

eventEmitter.addListener('say',listenerOne);
eventEmitter.addListener('say',lisenerTwo);

console.log("--say事件的监听器数量:" + eventEmitter.listenerCount("say"));

eventEmitter.emit('say', 'quinn', ' hello node');


console.log('----study eventEmitter end---');