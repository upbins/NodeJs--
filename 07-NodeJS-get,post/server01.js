
// 简单的分路由使用
// var http = require("http")
// var router = require("./model/router.js");
// var url = require("url")
// http.createServer(function (req,res) {
//     //router.statics(req,res,"static")
//     var pathname = url.parse(req.url).pathname
//     //根据不同的url来操作不同的路由操作
//     if (pathname === "/login"){
//         console.log("login")
//     }
//     else if(pathname === "/register"){
//         console.log("register")
//     }
//     else{
//         console.log("other")
//     }
// }).listen(8000)
//
// console.log("sever running 8000")


//通过ejs的模板引擎来使用
var http = require("http")
var url = require("url")
var ejs = require("ejs")
//ejs常用标签
//<% %>流程控制标签,例如里面加个for
//<%= %>输出标签(原文输出HTML标签)
//<%- %>输出标签(Html会被浏览器解释
http.createServer(function (req,res) {
    //router.statics(req,res,"static")
    res.writeHead(200,{"Content-type":"text/html;charest='utf-8'"})
    var pathname = url.parse(req.url).pathname
    //console.log(pathname)
    if (pathname != "/favicon.ico") {
        //根据不同的url来操作不同的路由操作
        if (pathname === "/login"){
            console.log("login")
            var data_temp = "我是一个数据";
            var list = [
                "1111",
                "2222",
                "3333",
                "4444",
            ];
            var h = "<h2>我这是一个html数据啊</h2>"
            ejs.renderFile("views/login.ejs",{
                msg:data_temp,
                list:list,
                h:h,
            },function (err,data) {
                res.end(data);
            })
        }
        else if(pathname === "/register"){
            console.log("register")
            var register_data  = "我是个注册数据"
            ejs.renderFile("views/register.ejs",{
                msg:register_data,
            },function (err,data) {
                res.end(data);
            })
        }
        else{
            console.log("other")
        }
    }

}).listen(8000)

console.log("sever running 8000")