var http  = require("http");
var config = require("./config");

var app = http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(config.str);
    res.end()
})

console.log("server runnig on 23333")
app.listen(23333);