
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
http.createServer(function (req,res) {
    //router.statics(req,res,"static")
    var pathname = url.parse(req.url).pathname
    //根据不同的url来操作不同的路由操作
    if (pathname === "/login"){
        console.log("login")
    }
    else if(pathname === "/register"){
        console.log("register")
    }
    else{
        console.log("other")
    }
}).listen(8000)

console.log("sever running 8000")