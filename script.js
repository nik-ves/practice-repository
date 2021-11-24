"use strict";

const button = document.querySelector(".check");
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const secretNumberBox = (document.querySelector(".number").textContent =
  secretNumber);

let score = 20;

button.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  // const message = document.querySelector(".message").textContent;
  // const scoreBox = (document.querySelector(".score").textContent = score);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number!";
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
