//事件驱动

var events = require("events")
var fs = require("fs")
var EventEmitter = new events.EventEmitter()


EventEmitter.on("on_data",function (data) {
    console.log(data.toString())
});


// setTimeout(function () {
//     console.log("开始发送数据")
//     EventEmitter.emit("on_data","数据")
// },2000)

fs.readFile("mime.json",function (error,data) {
    if (error){

    }else{
        EventEmitter.emit("on_data",data)
    }
})