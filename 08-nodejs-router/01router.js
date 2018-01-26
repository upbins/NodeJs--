//get,post的使用

var http = require("http")
var ejs = require("ejs")
var url = require("url")
var fs = require("fs")
http.createServer(function (req,res) {
    //信息头
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    var pathname = url.parse(req.url,true).pathname //获取链接地址
    var method = req.method.toLocaleLowerCase()//小写
    if (pathname != "/favicon.ico") {
        //根据不同的url来操作不同的路由操作
        if (pathname === "/login")
        { //显示登陆界面
            console.log("login")
            ejs.renderFile("views/form.ejs",{},function (err,data) {
                res.end(data);
            })
        }
        else if(pathname === "/dologin" && method == "post")
        { //执行登陆界面
            var postStr = "";
            req.on("data",function (chunk) {
                postStr += chunk;
            })
            console.log(postStr)
            req.on("end",function (err,chunk) {
                fs.appendFile("login.txt",postStr + "\n",function (err) {
                    if (err){
                        res.end(err);
                        return;
                    }
                    console.log("写入数据成功")
                })
                res.end("<script>alert('登陆成功');history.back();</script>")
            })


        }
        else {
            console.log("index")
            ejs.renderFile("views/index.ejs",{},function (err,data) {
                res.end(data);
            })
        }
    }
}).listen(8000)

console.log("sever running 8000")