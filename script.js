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

Person.hey = function () {
  console.log("Hey there");
  console.log(this);
};

Person.hey();

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

/*
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
*/

/////////////////////////////////////////////////////////

/* 
const account = {
  owner: "Nikola",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}.`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log("Hey there");
    console.log(this);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
const walter = new PersonCl("Walter White", 1965);

PersonCl.hey();
*/

/////////////////////////////////////////////////////////

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();
*/

/////////////////////////////////////////////////////////

/*
const CarCl = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    let speed = (this.speed += 10);
    console.log(`${speed} km/h.`);
  }

  brake() {
    let speed = (this.speed -= 5);
    console.log(`${speed} km/h.`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
};

const ford = new CarCl("Ford", 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

/////////////////////////////////////////////////////////

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike);
*/

/////////////////////////////////////////////////////////

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  return (this.charge = chargeTo);
};

EV.prototype.accelerate = function () {
  let speed = (this.speed += 20);
  let charge = (this.charge -= 1);
  return console.log(
    `${this.make} going at ${speed} km/h, with a charge of ${charge}%.`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
