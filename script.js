"use strict";

// Constructor functions and the new operator

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
