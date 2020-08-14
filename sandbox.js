// explicit types
var character;
var age;
var isFemale;
// character = 13;
// Type '13' is not assignable to type 'string'.
character = 'becca';
age = 21;
isFemale = true;
// Array
var friends;
friends = ['becca', 'fei', 'jasmine', 'merlin', 'chen', 'yue'];
// friends.push(1);
// Argument of type '1' is not assignable to parameter of type 'string'.
friends.push('jassica');
var numbers;
numbers.push(1);
numbers.push(2);
numbers.push(3);
// Union Types
var mixed = [];
// array 的话，需要使用 () 来包裹可能的类型
mixed.push('becca');
mixed.push(22);
mixed.push(false);
var uid;
// 普通数据类型不需要
uid = 'aedasdn213';
uid = 123123;
// Object
var becca;
becca = {
    name: 'shuangyu',
    age: 21,
    sex: 'female'
};
var becca1;
becca1 = {
    name: 'shuangyu',
    age: 22,
    skill: ['front-end development', 'sleep']
};
