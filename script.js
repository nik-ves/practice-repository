"use strict";

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = "Test";
//       const type = `Oh, and you're a millenial, ${firstName}.`;
//       console.log(type);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(type);
//     console.log(millenial);

//     // add(2, 3);
//   }

//   printAge();

//   return age;
// }

// const firstName = "Nikola";
// calcAge(1990);

// hoisting with variables

// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Nikola";
// let job = "Student";
// const year = 1998;

// functions

// console.log(addDecal(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecal(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
// console.log("all products are deleted");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1998);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1990);

// const nikola = {
//   year: 1998,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// nikola.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = nikola.calcAge;
// matilda.calcAge();

// const f = nikola.calcAge;
// f();

var firstName = "Matilda";

const nikola = {
  firstName: "Nikola",
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // const self = this;
    // const isMillenial = function() {
    //   console.log(self.year >= 1981 && self.year <= 1996)
    // }
    // isMillenial()

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey, ${this.firstName}`);
  },
};

// nikola.greet();
// nikola.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments)
  return a + b;
};
addExpr(2, 5)
addExpr(2, 5, 5, 7)

var addArrow = (a, b) => {
  console.log(arguments)
  return a + b;
};

addArrow(2, 5, 5, 7)