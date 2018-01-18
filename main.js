console.log("HelloWorld");
console.log(1);
console.log(1.2);
console.log(true);
console.log(false);
var a = 0.5;
console.log(a);
a = 1;
console.log(a);

var b = null;
console.log(b);

var c;
console.log(c);

var list = [];//数据对象,索引从0开始 索引==》value
console.log(list)

list = [1, 2, 3, 4, 5]
console.log(list)
console.log(list[0])

//{}表示定义一个表,字典 key==>value
var list_table = {
    0: true,
    hello: 3233223333,
}
console.log(list_table)

//访问table存在的key
console.log(list_table.hello)
console.log(list_table["hello"])

//访问不存在的key输出undefine

list_table.temple_key = 1
console.log(list_table.temple_key)
console.log(list_table)
list_table["upbins"] = "upbins"
console.log(list_table)

//定义一个变量,让它指向一个函数对象
//function (key_1,key_2)
var temp_function = function (param_1, param_2) {
    console.log("hello,temp_function", param_1, param_2)
}

temp_function(1, 2)

// //带返回值
retrun_function = function (params_1) {
    return (params_1)
}

//外部接收返回值
var ret1 = retrun_function(3333)
console.log(ret1)


//函数名称来定义一个函数,调用直接调用函数名称
//这个函数名称就是指的这个函数的对象
//整个JS文件有效
function study_function() {
    console.log("hello,study_function")
}
study_function()

//字符串对象 “123123”,'1233'

var test_str = "ssssss";


//字符串，数组，表，函数对象 = 传递的为引用，“指向”某个对象


var System = {
    test_function: function () {
        console.log("test_function")
    },
    test_function_2: function (params) {
        console.log("test_function_2", params)
    },
    name: 0,
    hello: 22222,
};

// var test_call_func = function () {

// }
System.test_function_2(2)


//if语句
if (a >= 0.5) {
    console.log("ififififififif")
}
else if (a < 0.5) {
    console.log("else if")
}
else {
    console.log("else")
}

//switch语句
var index = 2
switch (index) {
    case 1:
        console.log("switch1")
        break
    case 2:
        console.log("switch2")
        break
    default:
        console.log("default")
}

//while语句
index = 0;
while (index < 10) {
    console.log(index)
    index = index + 1
}
var walk = 0;
for (i = 1, walk = 0; i < 10; i++ , walk += 2) {
    console.log("@@@@@@@@@@@@@", walk)
}

var i = 0
for (; i < 10; i++) {
    i++
    console.log(i)
}

i = 10
do {
    i++;
} while (i < 13)

for (i = 1; i < 10; i++) {
    if (i == 8) {
        continue;
    }
}

var sum = 0
var single_sum = 0
for (i = 1; i <= 100; i++) {
    sum = sum + i
    if (i % 3 == 0) {
        single_sum = single_sum + i
    }
}
console.log(sum, single_sum)

//Math函数

//圆周率
console.log(Math.PI)

//随机函数[0,1)--》Math.random(  )

//随机函数
function random_int(start, end) {
    var num = start + (end - start) * Math.random() //返回的是[start，end)小数
    //小数变整数,向下取整,Math.ceil(num)-->向上取整
    return Math.floor(num)
}

console.log(random_int(6, 15))


//三角函数, 正弦，余弦，正切
//单位都是数学的弧度,而不是度,方向是数学的正方向
console.log(Math.sin(Math.PI / 4)) //sin 45
console.log(Math.cos(Math.PI / 3))
console.log(Math.tan(Math.PI * 2 / 6))

//度[0,360]
//弧度[0,2*PI]
function degree_to_r(degree) {
    return (degree / 180) * Math.PI
}

//弧度转度
function r_to_degree(r) {
    return (r / Math.PI) * 180
}

//反三角函数--->弧度
var a_r = Math.asin(0.5)
var c_r = Math.acos(0.5)
var t_r = Math.atan(1)
console.log(r_to_degree(a_r), r_to_degree(c_r), r_to_degree(t_r))

//tag--->y/x atan2(y,x)
//atan[PI,-PI]
var tan_2_r = Math.atan2(1, 1)
console.log(tan_2_r)

//平方根
var sqrt_value = Math.sqrt(4444)

//获取数组长度

var array_num = [1, 2, 3]
console.log("array_num", array_num.length)

//遍历数组
for (var index = 0; index < array_num.length; index++) {
    var element = array_num[index];
    console.log(element)
}

for (var key in array_num) {
    console.log(key + "----->" + array_num[key])
}


array_num.push(10)
console.log(array_num)
console.log(array_num.indexOf(10))

console.log(array_num.splice(1, 3))

//排序
var sort_array = [1, 7, 8, 9, 3, 4, 6, 7, 2, 10]

sort_array.sort(function (a, b) {
    if (a < b) {
        return -1; //a排在b左边
    }
    else if (a > b) {
        return 1;//a排在b右边
    }
    else { //相等
        return 0;
    }
});
console.log(sort_array)


//随机打乱一个数据
var random_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

random_array.sort(function (a, b) {
    if (Math.random() < 0.5) {
        return -1; //a排在b左边
    }
    else {
        return 1;//a排在b右边
    }
});
console.log(random_array)
//随机抽取一个数
console.log(random_array[random_int(0, random_array.length)])

//表的高级应用
var student = {
    xiao1: 1,
    xiao2: 2,
    xiao3: 3,
    xiao4: 4,
};

for (var key in student) {
    if (student.hasOwnProperty(key)) {
        var element = student[key];
        console.log(element)
    }
}
//删除表某项数据key
delete student["xiao1"];

for (var key in student) {
    if (student.hasOwnProperty(key)) {
        var element = student[key];
        console.log(element)
    }
}

//字符串
var s_str = "HelloWorld"
console.log(s_str.length)
var s_str_index = s_str.indexOf("ello")//查找不到索引返回-1
console.log(s_str_index)

//replace是重新生成
var temp_str = s_str.replace("Hello", "SSSSS")
console.log(temp_str, s_str)

//转换大小写
var upper_str = s_str.toUpperCase()
console.log(temp_str, s_str, upper_str)