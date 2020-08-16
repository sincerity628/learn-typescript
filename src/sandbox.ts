// Function
let greet = () => {
  console.log('hello, world.');
}

// greet = 0;
// Type '0' is not assignable to type '() => void'.

// 声明函数类型，大写 F
let greet1: Function;
greet1 = () => {
  console.log('hello, again.');
}

// 参数 c 非必须，且类型可以为 number or string
let add = (a: number, b: number, c?: number | string):void => {
  console.log(a + b);
  console.log(c);
}

add(10, 5);
// 15
// undefined

add(10, 12, 20);

// 为参数 c 赋初值 10
let minus = (a: number, b: number, c: number | string = 10):number => {
  console.log(c);
  return a - b;
}

let result = minus(10, 3, 20);
console.log(result); // 20 7

console.log(minus(10, 3)); // 10 7