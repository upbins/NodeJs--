var http = require("http");
console.log("node.js");

//req:获取url信息，response:浏览器返回信息
http.createServer(function (req, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //界面输出
    response.write("Hello NodeJs\n");

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(23333);

console.log("server runnig on 23333")