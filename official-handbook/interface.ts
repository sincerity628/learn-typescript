interface labelValue {
  label: string
}

function printLabel(labelObj: labelValue): void {
  console.log(labelObj.label);
}

const labelObj = {
  size: 28,
  label: 'ahha'
} 

printLabel(labelObj);


interface squareValue {
  color?: string;
  width?: number
}

function createSquare(
  config: squareValue
): {
  color: string,
  area: number
} {
  let newSquare = {
    color: 'white',
    area: 100
  }
  if(config.color) {
    newSquare.color = config.color;
  }
  if(config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let newSquare = createSquare({
  color: 'orange'
});

console.log(newSquare); // { color: 'orange', area: 100 }

let newSquare1 = createSquare({
  color: null,
  width: null
});

console.log(newSquare1); // { color: 'white', area: 100 }

let newSquare2 = createSquare({
  color: 'pink',
  width: 6
});

console.log(newSquare2); // { color: 'pink', area: 36 } 

console.log('==================');

interface Person {
  readonly name: string;
  readonly age: number
}

const person: Person = {
  name: 'becca',
  age: 21
}

// person.name = 'rebecca';

console.log(person);

const num: number[] = [1, 2, 3, 4, 5];

const readonlyNumArr: ReadonlyArray<number> = num;


// Function interface
interface myFunc {
  (name: string, age: number): boolean
}

let myIntroduce: myFunc;

// myIntroduce = function(name: string, age: number): boolean {
//   return age > 20;
// }

myIntroduce = function(n, a) {
  return a > 20;
}

console.log(myIntroduce('becca', 21)); // true


// Array Interface
interface myArray {
  [index: number]: string
}

let students: myArray;
students = ['becca', 'fei', 'jasmine', 'merlin', 'chen'];

console.log(students); // [ 'becca', 'fei', 'jasmine', 'merlin', 'chen' ]
console.log(students[0]); // becca