'use strict';

function timeTask() {
    console.log(new Date());
}

function clearTimer() {
    console.log('shutdown global timeTask')
    clearInterval(global.timerTasker );
}

// 当前脚本的绝对路径名称
console.log('current file name: ' + __filename);
// 当前脚本的路径，绝对路径
console.log("current file dir: " + __dirname);

console.time("test");
// 3000毫秒后循环执行
global.timerTasker = setInterval(timeTask, 3000);

// 延迟10 * 000毫秒执行关闭定时timer
setTimeout(clearTimer, 10*1000);

console.timeEnd("test");
console.info('%d',100);
console.error('红色错误打印');
console.warn('黄色警告打印');
// 对象输出
console.dir(this);
// process

function processInfo() {
    // 内存使用情况
    var memory = process.memoryUsage();
    console.log("内存使用信息" + memory);
    console.log("heapTotal:" + memory.heapTotal);
    console.log("heapUsed:" + memory.heapUsed);

    // 平台信息
    console.log("node 运行平台" + process.platform);
    // 输出当前版本
    console.log('当前版本: ' + process.version);
    // 当前路径
    console.log("当前目录：" +process.cwd());
    
    // 退出事件
    process.on('exit', (code)=>{
        console.log('即将退出，退出码' + code);
    });

}

processInfo();

// 立即结束
//process.abort();