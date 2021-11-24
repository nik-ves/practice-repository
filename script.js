"use strict";

let secretNumberBox = document.querySelector(".number");
let message = document.querySelector(".message");
let scoreBox = document.querySelector(".score");
let highscoreBox = document.querySelector(".highscore");
let body = document.querySelector("body");

const buttonCheck = document.querySelector(".check");
const buttonAgain = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

buttonCheck.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // no input check
  if (!guess) {
    message.textContent = "No number";

    // quess is correct
  } else if (guess === secretNumber) {
    message.textContent = "Correct number!";
    body.style.backgroundColor = "#60b347";
    secretNumberBox.style.width = "30rem";
    secretNumberBox.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscoreBox.textContent = highscore;
    }

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

buttonAgain.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  scoreBox.textContent = score;
  secretNumberBox.style.width = "15rem";
  secretNumberBox.textContent = "?";
  body.style.backgroundColor = "#222";
  message.textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});
