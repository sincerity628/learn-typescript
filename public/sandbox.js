"use strict";
// Function
var greet = function () {
    console.log('hello, world.');
};
// greet = 0;
// Type '0' is not assignable to type '() => void'.
// 声明函数类型，大写 F
var greet1;
greet1 = function () {
    console.log('hello, again.');
};
// 参数 c 非必须，且类型可以为 number or string
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(10, 5);
// 15
// undefined
add(10, 12, 20);
// 为参数 c 赋初值 10
var minus = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(c);
    return a - b;
};
var result = minus(10, 3, 20);
console.log(result); // 20 7
console.log(minus(10, 3)); // 10 7
