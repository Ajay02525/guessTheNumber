'use strict';
// the hidden secret number inside "?"  box
let secretNumber = Math.floor(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 10;
let highScore = 0;
//  check button
document.querySelector('.btn-check').addEventListener('click', function () {
  // Input the number to compare with secretNumber.
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // for no value is provided.
    displayMessage('Invalid Number, Try Again.');
    // for the correct ans.
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // if input number is greater than the secretNumber.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔼Too High' : '🔽Too Low');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});
// Try Again button
document.querySelector('.btn-again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});

// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '🔼Too High';
//     score = score - 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = '#ff0000';
//   }
//   // if input number is less than the secretNumber.
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '🔽Too Low';
//     score = score - 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = '#ff0000';
//   }
