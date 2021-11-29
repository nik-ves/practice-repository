"use strict";

/* 
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);
*/

/////////////////////////////////////////////////////////////////////

/*
const flight = "LH234";
const nikola = {
  name: "Nikola Veselinovic",
  passport: 22131241250,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 22131241250) {
    alert("Check in ");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, nikola);
console.log(flight);
console.log(nikola);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random * 100000000);
};

newPassport(nikola);
checkIn(flight, nikola);
*/

/////////////////////////////////////////////////////////////////////

/*
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}.`);
  console.log(`Transformed string: ${fn(str)}.`);

  console.log(`Transformed by: ${fn.name}.`);
  console.log("------------------------------");
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callback all the time
const high5 = function () {
  console.log("wave");
};

document.body.addEventListener("click", high5);
*/

/////////////////////////////////////////////////////////////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Nikola");
greeterHey("Steven");

greet("Hey")("Nikola");

const greet2 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

greet2("Hey")("Test");
