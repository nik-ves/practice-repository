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

let person: {
  name: string;
  age: number;
}; // not creating an object but defining the type which is an object

person = {
  name: "Nikola",
  age: 23,
};

let people: { // here we are saying that we want to store na array of defined object
  name: string;
  age: number;
}[];
