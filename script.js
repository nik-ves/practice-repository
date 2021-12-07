"use strict";

// Constructor functions and the new operator

/*
const Person = function (firstName, birthYear) {
  // instance properties this.firstName and this.birthYear
  this.firstName = firstName;
  this.birthYear = birthYear;

  // bad practice, never create method inside of constructor function
  // each of created objects will carry this method
  // 100 objects = 100 * calcAge
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const nikola = new Person("Nikola", 1998);
console.log(nikola);

// 1. New {} is created
// 2. function is called, this keyword will be set on the newly created object
// 3. new project is linked to prototype
// 4. function automatically return that empty object in the beggining

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(matilda);
console.log(jack);

console.log(nikola instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

nikola.calcAge();
matilda.calcAge();

console.log(nikola.__proto__);

Person.prototype.species = "Homo Sapiens";
console.log(nikola.species, matilda.species);

console.log(nikola.hasOwnProperty("firstName"));
console.log(nikola.hasOwnProperty("species"));

// Prototypal inheritance on built-in objects
console.log("============================================");

console.log(nikola.__proto__); // Person.prototype
console.log(nikola.__proto__.__proto__); // Object.prototype - top
console.log(nikola.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor);

const arr = [3, 6, 5, 6, 9, 3, 6, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(h1);
console.dir((x) => x + 1);

// Challenge 1

const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

Car.prototype.accelerate = function () {
  return console.log((this.speed += 10));
};

Car.prototype.brake = function () {
  return console.log((this.speed -= 10));
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
*/

/////////////////////////////////////////////////////////

// class expresion
// const PersonCl = class {};

// class decleration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}.`);
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}.`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class sitizens
// 3. Classes are executed in strict mode
