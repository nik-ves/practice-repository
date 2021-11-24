"use strict";

let secretNumberBox = document.querySelector(".number");
let message = document.querySelector(".message");
let highscore = document.querySelector(".highscore");
let scoreBox = document.querySelector(".score");

const button = document.querySelector(".check");
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;

button.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // no input check
  if (!guess) {
    message.textContent = "No number";

    // quess is correct
  } else if (guess === secretNumber) {
    message.textContent = "Correct number!";
    highscore.textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    secretNumberBox.style.width = "30rem";
    secretNumberBox.textContent = secretNumber;

    // guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "Too low!";
      score--;
      scoreBox.textContent = score;
    } else {
      message.textContent = "You lost the game!";
      scoreBox.textContent = 0;
    }

    // guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "Too high!";
      score--;
      scoreBox.textContent = score;
    } else {
      message.textContent = "You lost the game!";
      scoreBox.textContent = 0;
    }
  }
});
