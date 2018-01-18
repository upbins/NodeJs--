
// 初学js明确
// 首先，要明确几个点：
// 1.在JS里，万物皆对象。方法（Function）是对象，方法的原型(Function.prototype)是对象。因此，它们都会具有对象共有的特点。
//   即：对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。
// 2.方法(Function)方法这个特殊的对象，除了和其他对象一样有上述_proto_属性之外，还有自己特有的属性——原型属性（prototype），
//   这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）。原型对象也有一个属性，
//   叫做constructor，这个属性包含了一个指针，指回原构造函数。




// 返回tools文件的moudle.exports
// 第一次执行,加载tools.js文件,然后执行这个文件里面的js指令,返回module.exports;如果第二次执行，直接返回module.exports
// 指向的是module.exports指向的对象
// var tools = require("./tools")

// var random_num = tools.random_int(19,100)

// console.log(random_num)


// // 函数里面的this指向的是global对象,this.xx -->全局中的对象指向moudule.exports

// function this_function(name,sex){
//     this.name = name
//     this.sex = sex
// }


// // this,类似于一个参数，显式传递的this,
// // 函数对象.call(实例,参数)
// var this_table = {}
// this_function.call(this_table,"hi","女")
// console.log(global.name,this_table)

// //构造函数中的this-->指向的是它的实例，而不是global
// function func(){
//     this.name = "构造函数"
// }
// var fn = new func();
// console.log(fn.name)
// console.log(global.name)


// //隐式传递的this 
// var xiaohong = {
//     name:"xiaohong",
//     test_func:function(){
//         console.log(this)
//     },
//     test_bind:function(){
//         console.log(this)
//     }.bind(4)
// }

// //隐式的传递this,将xiaohong作为this,传递个这个函数
// xiaohong.test_bind()


// //强制传递this,bind是在原先的对象上面产生另外一个对象.并不是原本的对象,优先级比普通的高
// //强制Bind >显式>隐式
// var func = function() {
//     console.log("func-bind",this)
// }.bind(xiaohong)

// func();

// var bind_func = function() {
//     console.log("bind_func",this)
// }

// bind_func = bind_func.bind(xiaohong)
// bind_func()

// //显式
// xiaohong.test_func.call(4)


// //
// function person(name,sex){
//     this.name = name;
//     this.sex = sex;
// }
// person.prototype.test_func = function()
// {
//     console.log("person prototype test_func")
// }

// var person_1 = new person("嘻嘻",1)
// var person_2 = new person("哈哈",2)
// console.log(person_1,person_2)
// person_1.test_func()

// //new prototype
// //每一个函数对象,都会有一个prototype变量，指向对象
// //prototype是一个对象，也是一个表，所以可以扩充key-value
// var func_temp = function() {
//     console.log("func_temp")
// }
// func_temp.prototype.test_func  = function(){
//     console.log("func_temp prototype test_func",this)
// }
// func_temp.prototype.test_func2  = function(){}


// //step1 var data = {}
// //step2 data.__proto__:prototype的浅复制，就是引用
// //step3 实例作为this传递给后面的函数
// //step4 调用函数
// var data = new func_temp()
// console.log(data.__proto__)
// console.log(func_temp.prototype)

// //data是个表
// data.name = "xxxxx" //实则是没有改变data._proto__的数据
// data.__proto__.test_func() 


// //把data作为this,传递给data.__proto__对象里面的函数
// data.test_func() //-->data.__proto__.test_func.call(data) 显式重新传递data.name

// //重新赋值test_func
// data.test_func = function(){
//     console.log("new_test_func",this)
// }

// data.test_func()//data.key_func首先会现有实例表搜索，如果存在，就直接读出来，反之到对象的__proto__里面寻找


// //__proto__和prototype

// //对象__proto__属性的值就是它所对应的原型对象：
// var one = {x: 1};
// var two = new Object();
// one.toString === one.__proto__.toString // true
// console.log(one.__proto__ === Object.prototype)
// console.log(two.__proto__ === Object.prototype)

// prototype属性，不像每个对象都有__proto__属性来标识自己所继承的原型，只有函数才有prototype属性。
// 你创建函数时，JS会为这个函数自动添加prototype属性，值是空对象。而一旦你把这个函数当作构造函数（constructor）调用（即通过new关键字调用），
// 那么JS就会帮你创建该构造函数的实例，实例继承构造函数prototype的所有属性和方法（实例通过设置自己的__proto__指向承构造函数的prototype来实现这种继承）。
// 对象的__proto__指向自己构造函数的prototype。obj.__proto__.__proto__...的原型链由此产生，
// 包括我们的操作符instanceof正是通过探测obj.__proto__.__proto__... === Constructor.prototype来验证obj是否是Constructor的实例。
// 回到开头的代码，two = new Object()中Object是构造函数，所以two.__proto__就是Object.prototype。至于one，ES规范定义对象字面量的原型就是Object.prototype
// 原型链的尽头（root）是Object.prototype。所有对象均从Object.prototype继承属性。
// Function.prototype和Function.__proto__为同一对象
// Function.prototype直接继承root（Object.prototype）。

// 回归规范，摘录2点：
// Function.prototype是个不同于一般函数（对象）的函数（对象）。
// Function.prototype像普通函数一样可以调用，但总是返回undefined。
// 普通函数实际上是Function的实例，即普通函数继承于Function.prototype。func.__proto__ === Function.prototype。
// Function.prototype继承于Object.prototype，并且没有prototype这个属性。func.prototype是普通对象，Function.prototype.prototype是null。
// 所以，Function.prototype其实是个另类的函数，可以独立于/先于Function产生。
// Object本身是个（构造）函数，是Function的实例，即Object.__proto__就是Function.prototype。

// 最后总结：先有Object.prototype（原型链顶端），Function.prototype继承Object.prototype而产生，最后，Function和Object和其它构造函数继承Function.prototype而产生。



//js 继承

//父类
var Person = function(){};
Person.prototype.set_name = function(name){
    this.name = name;
    console.log(this.name)
}
Person.prototype.set_age = function(age){
    this.age = age
}

//新建一个男人类

var Man = function(){}

//方式1继承
// Man.prototype = Person.prototype

// var man_test = new Man()
// man_test.set_name("123123")

//方式2继承
var superClass = function(){};
superClass.prototype = Person.prototype
Man.prototype = new superClass()
Man.prototype.setSex = function(sex){
    this.sex = sex
    console.log(sex)
}
var man_test_1 = new Man()
// man_test_1.setSex(1)
// man_test_1.set_name("supersuper")

var Class = function(params){
    var new_class = function(){};
    //继承基类的方法
    if (params.extend) {
        var superClass = function(){};
        superClass.prototype = Person.prototype
        new_class.prototype = new superClass()
    }
    for(var key in params)
    {
        if (key == "extend")
        {
            continue
        }
        new_class.prototype[key] = params[key]
    }
    return new_class
}

var Student = Class({
    extend:Person,//只是判断extend是否存在
    set_class:function(class_num){
        console.log(class_num)
    },
    set_grade:function(class_grade){
        console.log(class_grade)
    }
});

var stu = new Student()
console.log(stu)
// stu.set_name(123123)



