"use strict";
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var labelObj = {
    size: 28,
    label: 'ahha'
};
printLabel(labelObj);
function createSquare(config) {
    var newSquare = {
        color: 'white',
        area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var newSquare = createSquare({
    color: 'orange'
});
console.log(newSquare); // { color: 'orange', area: 100 }
var newSquare1 = createSquare({
    color: null,
    width: null
});
console.log(newSquare1); // { color: 'white', area: 100 }
var newSquare2 = createSquare({
    color: 'pink',
    width: 6
});
console.log(newSquare2); // { color: 'pink', area: 36 } 
console.log('==================');
var person = {
    name: 'becca',
    age: 21
};
// person.name = 'rebecca';
console.log(person);
var num = [1, 2, 3, 4, 5];
var readonlyNumArr = num;
var myIntroduce;
// myIntroduce = function(name: string, age: number): boolean {
//   return age > 20;
// }
myIntroduce = function (n, a) {
    return a > 20;
};
console.log(myIntroduce('becca', 21)); // true
var students;
students = ['becca', 'fei', 'jasmine', 'merlin', 'chen'];
console.log(students); // [ 'becca', 'fei', 'jasmine', 'merlin', 'chen' ]
console.log(students[0]); // becca
