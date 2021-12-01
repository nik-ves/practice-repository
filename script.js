"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovementsHandler = (movements) => {
  containerMovements.innerHTML = "";

  movements.forEach((movement, index) => {
    const type = movement > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${movement}</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovementsHandler(account1.movements);

const createUsernames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name.at(0))
      .join("");
  });
};

createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2));

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];

console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

// JOIN
console.log(letters.join("-"));

// PUSH
// console.log(arr.push("t", "x", "w"));
// console.log(arr);

// UNSHIFT
// console.log(arr.unshift("t", "x", "w"));
// console.log(arr);

// POP
// console.log(arr.pop());
// console.log(arr.length);
// console.log(arr);

// SHIFT
console.log(arr.shift());
console.log(arr);
*/

/////////////////////////////////////////////////

/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.at(-1));

console.log("nikola".at(-1));
*/

/////////////////////////////////////////////////

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [index, value] of movements.entries()) {
  if (value > 0) {
    console.log(`Movement ${index + 1}: You deposited ${value}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(value)}`);
  }
}

console.log("===== forEach =====");
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
*/

/////////////////////////////////////////////////

/*
// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`); // key is the same as value
});
*/

/////////////////////////////////////////////////

/*
// Challenge 1
const julia1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];

const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = (dogsJulia, dogsKate) => {
  // 1.
  const dogsJuliaCorrected = [...dogsJulia];
  dogsJuliaCorrected.shift();
  dogsJuliaCorrected.splice(2);
  console.log(dogsJuliaCorrected);

  // 2.
  const bothData = [...dogsJuliaCorrected, ...dogsKate];
  console.log(bothData);

  // 3.
  bothData.forEach((age, index) => {
    const dog = age >= 3 ? "adult" : "puppy";

    console.log(`Dog number ${index + 1} is a ${dog} and is ${age} years old.`);
  });
};

checkDogs(julia1, kate1);
checkDogs(julia2, kate2);
*/

/////////////////////////////////////////////////

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map((mov) => {
//   return mov * eurToUsd;
//   // return 23;
// });

const movementsArrow = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsArrow);

const movementsDescriptions = movements.map((movement, index) => {
  return `Movement ${index + 1}: You ${
    movement > 0 ? "deposited" : "withdrew"
  } ${Math.abs(movement)}`;
});

console.log(movementsDescriptions);
*/

/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((movement) => {
  return movement > 0;
});

console.log(deposits);

const withdrawals = movements.filter((movement) => {
  return movement < 0;
});

console.log(withdrawals);
