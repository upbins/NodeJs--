/*
1.fs.stat 检测是文件还是目录
2.fs.mkdir 创建目录
3.fs.writeFile 创建写入文件
4.fs.appendFile 追加文件
5.fs.readFile 读文件
6.fs.readdir 读路径
7.fs.rename 重命名
8.fs.rmdir 删除目录
9.fs.unlink 删除文件
 */

var fs = require("fs");

// fs.stat("html",function (err,status) {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log("文件"+status.isFile())
//     console.log("目录"+status.isDirectory())
// })


/*
    path:创建目录路径
    mode:目录权限,默认0777
    callback:回调传递参数err
 */
// fs.mkdir("html/ccs",function (err) {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log("创建目录成功")
// })

/*
    path:文件名称
    data:(String | Buffer) 将要写入的内容
    options:(Object)
        1.encoding 可选值,默认"utf8",当data为buffer时,该值应该为Ignored
        2.mode  读写权限 默认438
        3.flag  默认值“w”
    callback_：回调
 */
// fs.writeFile('index.txt',"upbins\n","utf-8",function (err) {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log("写入成功")
// })
//
// fs.appendFile("index.txt","upbins2\n","utf-8",function (err) {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log("写入成功")
// })

// fs.readFile("index.txt",function (err,data) {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log(data.toString())
// })

// fs.readdir("html",function (err,data) {
//     if (err){
//         console.log(err);
//         return false;
//     }
//     console.log(data)
// })

//可以重命名或者剪切
// fs.rename("html/ccs/index.html","html/index.html",function (err) {
//     if (err){
//         console.log(err);
//         return false;
//     }
// })


// fs.rmdir("test",function (err) {
//     if (err){
//         console.log(err);
//         return false
//     }
//     console.log("删除目录成功")
// })

// fs.unlink("test.js",function (err) {
//     if (err){
//         console.log(err);
//         return false
//     }
//     console.log("删除文件成功")
// })

//判断unload目录是否存在，不存在就创建
//
// fs.stat("upload",function (err,data) {
//     if (err) {
//         fs.mkdir("upload",function (err) {
//             if (err){
//                 console.log(err)
//             }else{
//                 console.log("创建成功")
//             }
//         })
//     }else{
//         console.log("目录已存在")
//         console.log((data.isDirectory()))
//     }
// })


//查找文件下的所有目录
// var fileArr = [];
// fs.readdir("html",function (err,files) {
//     if (err){
//         console.log(err)
//     }else{
//         console.log(files);
//         (function getFiles(i){
//             if (i == files.length) {
//                 console.log(fileArr)
//                 return false;
//             }
//             //需要主要文件目录加上根目录路径
//             fs.stat("html/"+ files[i],function(err,data) {
//                 if (err){
//                     console.log(err)
//                 }else{
//                     if (data.isDirectory()){
//                         fileArr.push(files[i])
//                     }
//                     getFiles(i + 1)
//                 }
//             })
//         })(0);
//     }
// })


//流的方式读取文件

// var readStream = fs.createReadStream("index.txt");
//
// var str = ""
// var count = 0
// readStream.on("data",function (chunk) {
//     str += "\n" + chunk;
//     count ++;
// });
//
// readStream.on("end",function (chunk) {
//     console.log(str);
//     console.log(count)
// });

//流的方式写入数据

var str = "upbins";
var writeStream = fs.createWriteStream("index.txt")
for (i = 0;i<100;i++){
    var temp_str = str +"_"+ i +"\n";
    console.log(temp_str)
    writeStream.write(temp_str,"utf-8")
}
writeStream.end()//写入完成
writeStream.on("finish",function () {
    console.log("写入完成")
})

writeStream.on("error",function () {
    console.log("写入失败")
})

//管道流
var readStream = fs.createReadStream("index.txt");
var writeStream = fs.createWriteStream("index_out.txt")
readStream.pipe(writeStream)
console.log("pipe写入完成")


