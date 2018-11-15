'use strict';

console.log('--------buffer study begin----------');

// 创建
var buffer = Buffer.from("hello node buffer");
console.log(buffer.toString('utf-8'));

console.log("buffer:" +buffer);


var buf = Buffer.alloc(256);
 var len = buf.write('node buffer alloc method');
 console.log(buf.toString('utf-8', 0, 24));
 console.log("写入字节数： " + len);

// 写入

len += buf.write(', i am an append string', len, 'utf-8');

// 读取
console.log(buf.toString('utf-8', 0, (len)));

// 比较
var buf1 = Buffer.from('abcd');
var buf2 = Buffer.from('abcdwsql');
console.log(buf1.compare(buf2));
//拷贝
var buf3 = Buffer.alloc(256);
var len3 = buf2.copy(buf3, 0);
console.log(buf3.toString('utf-8', 0, len3));

// 转化JSON
var gbuf = Buffer.from('{name: jiazhiqiang, sex: man, phone: 183298}');
console.log(gbuf.toJSON());


console.log('--------buffer study end----------');