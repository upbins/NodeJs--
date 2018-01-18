// const buf = Buffer.from('hello world', 'ascii');

// // 输出 68656c6c6f20776f726c64
// console.log(buf.toString('hex'));

// // 输出 aGVsbG8gd29ybGQ=
// console.log(buf.toString('base64'));


// const arr = new Uint16Array(2);

// arr[0] = 5000;
// arr[1] = 4000;

// // 拷贝 `arr` 的内容
// const buf1 = Buffer.from(arr);

// // 与 `arr` 共享内存
// const buf2 = Buffer.from(arr.buffer);

// // 输出: <Buffer 88 a0>
// console.log(buf1);

// // 输出: <Buffer 88 13 a0 0f>
// console.log(buf2);

// arr[1] = 6000;

// // 输出: <Buffer 88 a0>
// console.log(buf1);

// // 输出: <Buffer 88 13 70 17>
// console.log(buf2);


const buf = Buffer.alloc(5);

// 输出: <Buffer 00 00 00 00 00>
console.log(buf);