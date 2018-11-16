'use strict'
var http = require('http');
var httpServer={
    
    run:function(){
        var server = http.createServer(function(request, response){
            console.log(request.method + ' : ' + request.url);
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end('<h1>welcome to node world!</h1>');
        });

        server.listen(8080);

        console.log(' http server is running at http://127.0.0.1:8080');
    }

}

module.exports=httpServer;