var ejs = require("ejs");
var app = {
    login:function (req,res) {
        console.log("login")
        ejs.renderFile("form.ejs",{},function (err,data){
            res.end(data);
        })
    },
    register:function (req,res) {
        console.log("register")
        res.end("register")
    },
    home:function (req,res) {
        res.end("home")
    }
}
module.exports = app