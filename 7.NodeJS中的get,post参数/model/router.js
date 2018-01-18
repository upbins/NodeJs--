
var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");

var getExtFileName = function (extname,call_back) {
    fs.readFile("./mime.json",function (err,data) {
        if (err){
            console.log(err + "文件不存在");
            return false;
        }else{
            var data_json = JSON.parse(data.toString());
            //return data_json[extname] || "text/html";
            var result_data  = data_json[extname] || "text/html";
            call_back(result_data)
        }
    })

};
exports.statics = function (req,res,static_pathname) {
    var pathname = url.parse(req.url).pathname; //获取路径的文件名
    if (pathname == "/") {
        pathname = "/index.html";
    };
    //获取文件的后缀名
    var extname =  path.extname(pathname)
    if (pathname != "/favicon.ico"){
        fs.readFile(static_pathname+pathname,function (err,data) {
            if (err){
                //找不到页面这时候可以调用文件中的404页面
                fs.readFile(static_pathname + "/404.html",function (err,data404) {
                    res.writeHead(404, {'Content-Type': 'text/html;charset = "utf-8"'});
                    res.write(data404);
                    res.end();
                })
            }else{ //返回这个文件
                //var name = getExtName(extname);
                //var name = getExtFileName(extname)
                getExtFileName(extname,function (mine) { //利用call_back实现异步读取文件回调
                    res.writeHead(200, {'Content-Type': ""+mine+";charset = 'utf-8'"});
                    res.write(data);
                    res.end();
                });

            }
        });
    };
}