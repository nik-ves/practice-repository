"use strict";

// elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector(".dice");

// buttons
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

// score
let currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// rolling dice functionality

rollBtn.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
  }
});
