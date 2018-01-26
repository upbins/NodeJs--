var G = {}//定义一个表

var http = require("http")
var url = require("url")
var app = function (req,res) {
    var pathname = url.parse(req.url).pathname //格式化链接
    if (!pathname.endsWith("/"))
    {
        pathname = pathname + "/"
    }
    if (G[pathname]){
        G[pathname](req,res) //执行注册的方法
    }
}


//定义一个get的方法
app.get = function (string,call_back) {
    if(!string.endsWith("/")){
        string = string + "/"
    }
    if(!string.startsWith("/")){
        string = "/" + string
    }
    G[string] = call_back;
}

http.createServer(app).listen(8000);


//注册login这个路由方法
app.get("login",function (req,res) {
    console.log("login")
    res.end("login")
})

//注册register这个路由方法
app.get("register",function (req,res) {
    console.log("register")
    res.end("register")
})