// Boolean
const flag: boolean = true;

//  Number
const number1: number = 1;
const number2: number = 0xfffd;

console.log(number1); // 1
console.log(number2); // 65533

// String
const string1: string = 'hey, there.';
const string2: string = `${ string1 } Becca :)`;
const string3: string = (string1) + ' Becca :)';

console.log(string2); // hey, there. Becca :)
console.log(string3);

// Array： 数组中的每一项元素需要类型一致
const array1: number[] = [1, 2, 3, 4, 5];
const array2: Array<number> = [1, 1, 1, 1];

// 元组

// 枚举
enum Color { Red, Green, Blue, Orange }
// 默认下标值从 0 开始
let c: Color = Color.Red;
let colorName: string = Color[2];

console.log(c); // 0
console.log(colorName); // Blue

// Any
let notSure: any = 6;
notSure = 'okay';
notSure = {
  name: 'becca',
  age: 20
};

console.log(notSure);

// Void
function warnUser(): void {
  alert('This is a warning message.');
}

// Null Undefined
let u: undefined = undefined;
let n: null = null;

let v1: void = undefined;
let v2: void = null;

// Never

// Object

