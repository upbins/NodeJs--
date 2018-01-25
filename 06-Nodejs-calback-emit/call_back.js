var fs = require("fs");


//回调函数解决异步
var getMime = function (call_back) {
    fs.readFile("mime.json",function (error,data) {
        if (error){

        }else{
            call_back(data)
        }
    })
}


getMime(function (result) {
    console.log(result.toString())
})