"use strict";

// constructor function
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const nikola = new Person("Nikola", 1998);
console.log(nikola);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person("Matilda", 2021);
const jack = new Person("Jack", 2017);

console.log(matilda);
console.log(jack);

console.log(matilda instanceof Person);
