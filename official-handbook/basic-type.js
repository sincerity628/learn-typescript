// Boolean
var flag = true;
//  Number
var number1 = 1;
var number2 = 0xfffd;
console.log(number1); // 1
console.log(number2); // 65533
// String
var string1 = 'hey, there.';
var string2 = string1 + " Becca :)";
var string3 = (string1) + ' Becca :)';
console.log(string2); // hey, there. Becca :)
console.log(string3);
// Array： 数组中的每一项元素需要类型一致
var array1 = [1, 2, 3, 4, 5];
var array2 = [1, 1, 1, 1];
// 元组
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Orange"] = 3] = "Orange";
})(Color || (Color = {}));
// 默认下标值从 0 开始
var c = Color.Red;
var colorName = Color[2];
console.log(c); // 0
console.log(colorName); // Blue
// Any
var notSure = 6;
notSure = 'okay';
notSure = {
    name: 'becca',
    age: 20
};
console.log(notSure);
