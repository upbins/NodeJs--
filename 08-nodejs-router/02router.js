var http = require("http");
var url = require("url");
var model = require("./model/model.js")

//路由:指的就是针对不同的请求URL,处理不同的业务逻辑
http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    var pathname = url.parse(req.url).pathname.replace('/','')
    if(pathname != "favicon.ico")
    {
        try {
            model[pathname](req,res);
        }catch(err) {
            console.log(err)
            model.home(req,res);
        }

    }
}).listen(8000)
console.log("server running on 8000")