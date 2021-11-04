// Primitives: number, strings, boolean
// More complex types: arrays, objects
// Functions types, parameters

// Primitives
let age: number = 3;

let userName: string = "Resi";

let isInstructor: boolean = true;

// More complex types
let hobbies: string[]; // tells typescript that we wnat to have an array of strings, same can be done for number[] and boolean[]

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person; // not creating an object but defining the type which is an object

person = {
  name: "Nikola",
  age: 23,
};

let people: Person[]; // here we are saying that we want to store na array of defined object

// Type inference
let course = "React - Complete Guide";

// course = 1234; // typescript recognized in the step above that the course is type string
// defining a type should be avoided because its redundant

let newCourse: string | number = "React - Complete Guide";
newCourse = 1234;

// Functions and types
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics
function instertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const numberArray = [1, 2, 3];
const stringArray = ['a', 'b', 'c'];


const updatedArray = instertAtBeginning(numberArray, -1); //[-1, 1, 2, 3];
const updatedArray2 = instertAtBeginning(stringArray, 'd'); 


