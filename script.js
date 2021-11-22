"use strict";

// console.log("===== Constructor function =====");
// // constructor function
// const Person = function (firstName, birthYear) {
//   // instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const nikola = new Person("Nikola", 1998);
// console.log(nikola);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically returns {}

// const matilda = new Person("Matilda", 2021);
// const jack = new Person("Jack", 2017);

// console.log(matilda);
// console.log(jack);

// console.log(matilda instanceof Person);

// console.log("===== Prototypes =====");

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// nikola.calcAge();
// matilda.calcAge();
// jack.calcAge();

// Person.prototype.species = "Homo Sapiens";
// console.log(nikola, matilda);

// console.log("===== Prototypal inheritance =====");

// console.log(nikola.__proto__.__proto__);
// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique())

// const h1 = document.querySelector('h1');

console.log("===== Challenge =====");

const Car = function (make, currentSpeed) {
  this.make = make;
  this.currentSpeed = currentSpeed;
};

Car.prototype.accelerate = function() {
  console.log(this.currentSpeed += 10);
};

Car.prototype.brake = function() {
  console.log(this.currentSpeed -= 5);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
