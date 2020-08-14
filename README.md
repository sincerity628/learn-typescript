# learn-typescript
1. 编译 Typescript
```
tsc index.ts index.js
// tsc -> typescript compiler
// 两个参数 a.ts, b.js -> 编译 a.ts 文件到 b.js 文件中
// 如果 a 和 b 文件名一致时，则可以忽略第二个参数
tsc index.ts
tsc index.ts -w
// -w -> watch 监听 ts 文件的变化，并自动编译
```

2. TypeScript will check the type of a variable before compiling into js.
```js
// String
let character = 'becca';
// Number
let age = 20;
// Boolean
let isFemale = false;

// character = 20; 编辑器提醒错误
character = 'Rebecca';
// age = '231';
age = 21;
// isFemale = 'yes';
isFemale = true;

const sayHi = (name: string) => {
  return `Hi, I'm ${ name }`
}
console.log(sayHi(character));
```

3. Array & Object :wave:
```js
// Array
let friends = ['becca', 'fei', 'jasmine', 'merlin', 'chen', 'yue'];

friends = 'yue';
// let friends: string[]
// Type '"yue"' is not assignable to type 'string[]'.

// friends[1] = 12; 
// Type '12' is not assignable to type 'string'.
friends[1] = 'rebecca';

// friends.push(true);
// Argument of type 'true' is not assignable to parameter of type 'string'.
friends.push('jinwen');

let numbers = [2, 6, 8, 22, 28, 628];

// numbers.push('rebecca');
// Argument of type '"rebecca"' is not assignable to parameter of type 'number'.
// numbers.push('fei');
numbers.push(520);

let mixed = ['becca', 628, 'fei', 512, 'mom', 714]; // 混合类型：string & number

// fine
mixed.push('yue');
mixed.push(421);
mixed[0] = 22;

--------------------------------------------------

// Object
let rebecca = {
  name: 'Shuangyu',
  age: 21,
  skill: 'front-end development'
}

// fine
rebecca.name = 'becca';
rebecca.age = 23;

// rebecca.sex = 'female';
// Property 'sex' does not exist on type '{ name: string; age: number; skill: string; }'.

// rebecca.name = true;
// Type 'true' is not assignable to type 'string'.

// rebecca = 'me';
// Type '"me"' is not assignable to type '{ name: string; age: number; skill: string; }'.

// fine
rebecca = {
  name: 'yue',
  age: 22,
  skill: 'sleep'
}
```

4. Explicit Types（已经知晓定义变量未来的类型）
  