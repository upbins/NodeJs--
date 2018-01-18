var url = require("url");
var http= require("http");

http.createServer(function (req,res) {
    //输入网址http://localhost:23333/role?aid=213&cid=123 获取aid和cid

    res.writeHead(200,{"Content-Type":"text/plain"});

    if (req.url != "/favicon.ico")
    {
        var result = url.parse(req.url,true);
        console.log("aid+"+result.query.aid);
        console.log("cid+"+result.query.cid);
    }
    res.end()//结束响应

}).listen(23333)
console.log("server runnig on 23333")

//url.parse解释Url,后面+true,获取?后面的信息返回为对象{}
// console.log(url.parse("http://www.baidu.com?name=upbins&age=20"));

//url.format是parse的逆向操作
// console.log(url.format( {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com',
//     port: null,
//     hostname: 'www.baidu.com',
//     hash: null,
//     search: '?name=upbins&age=20',
//     query: 'name=upbins&age=20',
//     pathname: '/',
//     path: '/?name=upbins&age=20',
//     href: 'http://www.baidu.com/?name=upbins&age=20' }));

//url.resolve替换最后一个/后面的内容
//console.log(url.resolve("http://www.baidu.com/222/22","upbins"));

//supervisor通过Npm安装之后，修改服务器代码就会直接重新加载