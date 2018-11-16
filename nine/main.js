'use strict';

var express = require('express');

var app = express();

app.get('/',function(req, res){
    res.send('hello express');
    console.log("参数： " + req.params);
});



var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('访问地址：http://%s:%s',host, port);
});