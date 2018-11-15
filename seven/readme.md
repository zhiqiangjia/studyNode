

### 简介
buffer是node特有的数据类型；主要用来处理二进制数据, 在前端javascript中，和二进制数据使用较少, 而node在进行web开发时经常需要和前端数据通信, 二进制数据流十分常见;



### 字符编码
buffer支持的编码格式
- ASCII
- Base64
- Binary
- Hex
- UTF-8
- UTF-16LE/UCS-2

### buffer 
- 创建 Buffer.from();
- Buffer.alloc(size)
```
var buffer = Buffer.from("hello node buffer");
console.log(buffer);
```
- 转字符串 buffer.toString

```
# 语法：
buffer.toString([encoding], [start],[end]);
```




- 写入 write

```
# 语法
buf.write(string, offset, encoding);
```

- 输出 toString


```
# 语法：

buffer.toString('encode', start, length);
```


- 比较 compare


```
var result = buffer1.compare(buffer2)

result < 0: buffer1 在buffer之前
result = 0: buffer1 = buffer2
result < 0: buffer1 在buffer2之后
```


- 拷贝 copy


```
# 语法

buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])

```

- 转换为toJSON

```
buf.toJSON();
```
