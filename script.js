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

const displayMovementsHandler = (movements, sort = false) => {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((movement, index) => {
    const type = movement > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${movement} EUR</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = (account) => {
  account.balance = account.movements.reduce((acc, cur) => {
    return acc + cur;
  });

  labelBalance.textContent = `${account.balance} EUR`;
};

const calcDisplaySummary = (account) => {
  const incomes = account.movements
    .filter((movement) => {
      return movement > 0;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const outcome = account.movements
    .filter((movement) => {
      return movement < 0;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  labelSumOut.textContent = `${Math.abs(outcome)} EUR`;

  const interest = account.movements
    .filter((movement) => {
      return movement > 0;
    })
    .map((deposit) => {
      return (deposit * account.interestRate) / 100;
    })
    .filter((int) => {
      return int >= 1;
    })
    .reduce((acc, int) => {
      return acc + int;
    }, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};

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

const updateUI = (acc) => {
  // Display movements
  displayMovementsHandler(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount;

// Event handlers
btnLogin.addEventListener("click", (event) => {
  event.preventDefault();

  currentAccount = accounts.find((account) => {
    return account.username === inputLoginUsername.value;
  });

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner
      .split(" ")
      .at(0)}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = "";
    inputLoginPin.value = "";

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", (event) => {
  event.preventDefault();

  let amount = Number(inputTransferAmount.value);
  let recieverAccount = accounts.find((account) => {
    return account.username === inputTransferTo.value;
  });

  inputTransferAmount.value = "";
  inputTransferTo.value = "";

  if (
    amount > 0 &&
    recieverAccount &&
    currentAccount.balance >= amount &&
    recieverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", (event) => {
  event.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", (event) => {
  event.preventDefault();

  let username = inputCloseUsername.value;
  let pin = Number(inputClosePin.value);

  inputCloseUsername.value = "";
  inputClosePin.value = "";

  console.log(username, pin);

  if (username === currentAccount.username && pin === currentAccount.pin) {
    const index = accounts.findIndex((acc) => {
      return acc.username === username;
    });

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
});

let sorted = false;

btnSort.addEventListener("click", (event) => {
  event.preventDefault();
  displayMovementsHandler(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((movement) => {
  return movement > 0;
});

console.log(deposits);

const withdrawals = movements.filter((movement) => {
  return movement < 0;
});

console.log(withdrawals);
*/

/////////////////////////////////////////////////

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator => snowball
// const balance = movements.reduce((accumulator, currentValue, index, array) => {
//   console.log(`Iteration ${index}: ${accumulator}`);
//   return accumulator + currentValue;
// }, 0);

const balance = movements.reduce((acc, cur) => {
  console.log(acc);
  return acc + cur;
}, 0);

console.log(balance);

// Maximum value
const max = movements.reduce((acc, cur) => {
  if (acc > cur) {
    return acc;
  } else {
    return cur;
  }
}, movements.at(0));

console.log(max);
*/

/////////////////////////////////////////////////

// Challenge 2

/*
const juliaDogs = [5, 2, 4, 1, 15, 8, 3];
const kateDogs = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) => {
  const ageInHuman = ages.map((age) => {
    if (age <= 2) {
      return 2 * age;
    } else if (age > 2) {
      return 16 + age * 4;
    }
  });

  const aboveAge = ageInHuman.filter((age) => age >= 18);

  const sum = aboveAge.reduce((acc, curr) => {
    return acc + curr;
  });

  console.log(
    `Average human age of all adult dogs is: ${sum / aboveAge.length}`
  );
};

calcAverageHumanAge(juliaDogs);
calcAverageHumanAge(kateDogs);
*/

/////////////////////////////////////////////////

/*
// Challenge 3
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) => {
  const humanAges = ages
    .map((age) => {
      return age <= 2 ? 2 * age : 16 + age * 4;
    })
    .filter((age) => {
      return age >= 18;
    })
    .reduce((acc, curr, i, arr) => {
      return acc + curr / arr.length;
    });
};


calcAverageHumanAge(data1);
calcAverageHumanAge(data2);
*/

/////////////////////////////////////////////////

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// pipeline
const totalDepositsUSD = movements
  .filter((movements) => {
    return movements > 0;
  })
  .map((movement) => {
    return movement * eurToUsd;
  })
  .reduce((acc, cur) => {
    return acc + cur;
  });

console.log(totalDepositsUSD);
*/

/////////////////////////////////////////////////

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((element) => {
  return element < 0;
});

console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => {
  return acc.owner === "Jessica Davis";
});

console.log(account);
*/

/////////////////////////////////////////////////

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EQUALITY
console.log(movements.includes(-130));

// SOME
// CONDITION
const anyDeposits = movements.some((movement) => {
  return movement > 5000;
});
console.log(anyDeposits);

// EVERY
console.log(
  movements.every((movement) => {
    return movement > 0;
  })
);
console.log(
  account4.movements.every((movement) => {
    return movement > 0;
  })
);

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/////////////////////////////////////////////////

/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map((acc) => {
  return acc.movements;
});
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements.flat());

const overalBalance = allMovements.reduce((acc, cur) => {
  return acc + cur;
});

// flat
const overalBalanceChain = accounts
  .map((acc) => {
    return acc.movements;
  })
  .flat()
  .reduce((acc, cur) => {
    return acc + cur;
  });

const overalBalanceChain2 = accounts
  .flatMap((acc) => {
    return acc.movements;
  })
  .reduce((acc, cur) => {
    return acc + cur;
  });

console.log(overalBalanceChain, overalBalanceChain2);
*/

/////////////////////////////////////////////////

// strings
const owners = ["Nikola", "Zac", "Adam", "Martha"];
console.log(owners.sort()); // changes the original array
console.log(owners);

// numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.sort());

// return < 0, A, B -- keep order
// return > 0 B, A -- switch order

// ascending
movements.sort((a, b) => {
  return a - b;
});
console.log(movements);

// descending
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   }
// });

movements.sort((a, b) => {
  return b - a;
});
console.log(movements);

/////////////////////////////////////////////////
