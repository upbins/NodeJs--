//get,post的使用

var http = require("http")
var ejs = require("ejs")
var url = require("url")
http.createServer(function (req,res) {
    //信息头
    res.writeHead(200,{"Content-type":"text/html;charest='utf-8'"})
    var pathname = url.parse(req.url,true).pathname //获取链接地址
    if (pathname != "/favicon.ico") {
        //根据不同的url来操作不同的路由操作
        if (pathname === "/login"){ //显示登陆界面
            console.log("login")
            ejs.renderFile("views/form.ejs",{},function (err,data) {
                res.end(data);
            })
        }
        else if(pathname === "/dologin"){ //执行登陆界面
            console.log(url.parse(req.url,true).query)
            res.end("dologin");
        }
        else{
            console.log("index")
            ejs.renderFile("views/index.ejs",{},function (err,data) {
                res.end(data);
            })
        }
    }
}).listen(8000)

console.log("sever running 8000")