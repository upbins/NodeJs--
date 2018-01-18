//本文主要解释在JS里面this关键字的指向问题(在浏览器环境下)。
// 首先，必须搞清楚在JS里面，函数的几种调用方式:
// 普通函数调用
// 作为方法来调用
// 作为构造函数来调用
// 使用apply/call方法来调用
// Function.prototype.bind方法
// es6箭头函数
// 但是不管函数是按哪种方法来调用的，请记住一点：谁调用这个函数或方法,this关键字就指向谁。

//普通函数调用
// function person(){
//     this.name="xl";
//     //console.log(this);
//     console.log(this.name);
// }

// person();  //输出  window  xl 

// 在这段代码中person函数作为普通函数调用，实际上person是作为全局对象window的一个方法来进行调用的,即window.person();
// 所以这个地方是window对象调用了person方法,那么person函数当中的this即指window,同时window还拥有了另外一个属性name,值为upbins.


var obj = {
    foo: function(){
      console.log(this)
    }
  }
  
  var bar = obj.foo
  obj.foo() // 打印出的 this 是 obj
  //bar() // 打印出的 this 是 window