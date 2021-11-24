"use strict";

// elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");

// buttons
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

// score
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

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

    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
