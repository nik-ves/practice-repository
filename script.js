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

/*
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
*/

/////////////////////////////////////////////////////////////////////

/*
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Nikola Veselinovic");
lufthansa.book(635, "Mike Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does not work because book is not a method anymore but a function, and in a function call this points to undefined
// book(23, "Stevan Stevanovic");

// Call method
book.call(eurowings, 23, "Nikola Nikolic");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);
*/

/////////////////////////////////////////////////////////////////////

/*
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

const book = lufthansa.book;

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Nikola Nikolic");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Stefan Stefanic");
bookEW23("Martha Cooper");

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => {
  return value + value * rate;
};

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

/////////////////////////////////////////////////////////////////////

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    // register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResaults();
    this.displayResaults("string");
  },
  displayResaults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are: ${this.answers.join(", ")}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResaults.call({ answers: [5, 2, 3] }, "string");
poll.displayResaults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
