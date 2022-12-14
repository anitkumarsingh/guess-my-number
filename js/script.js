'use strict';

let score = 20;
let hightScore = 0;
let computerGuess = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.guessed-number').textContent = computerGuess;
document.querySelector('.score-number').textContent = score;
document.querySelector('.high-score').textContent = hightScore;

document.querySelector('.btn-check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.enter-number').value);
  if (!guess) {
    document.querySelector('.msg').textContent = ' ⛔ No number!';
  } else if (guess === computerGuess) {
    document.querySelector('.guessed-number').textContent = computerGuess;
    document.querySelector('.msg').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.enter-number').style.backgroundColor = '#60b347';
    document.querySelector('.guessed-number').style.width = '20rem';
    if (score > hightScore) {
      hightScore = score;
    }
    document.querySelector('.high-score').textContent = hightScore;
  } else if (guess < computerGuess) {
    if (score > 1) {
      document.querySelector('.msg').textContent = '📉 Too Low!...';
      score--;
      document.querySelector('.score-number').textContent = score;
    } else {
      document.querySelector('.msg').textContent = '😬 You lost the game';
      document.querySelector('.score-number').textContent = 0;
    }
  } else if (guess > computerGuess) {
    if (score > 1) {
      document.querySelector('.msg').textContent = '📈 Too High!...';
      score--;
      document.querySelector('.score-number').textContent = score;
    } else {
      document.querySelector('.msg').textContent = '😬 You lost the game';
      document.querySelector('.score-number').textContent = 0;
    }
  }
});

document
  .querySelector('.btn-play-again')
  .addEventListener('click', function () {
    computerGuess = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.guessed-number').textContent = '?';
    document.querySelector('.score-number').textContent = score;
    document.querySelector('.enter-number').value = ' ';
    document.querySelector('.msg').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.enter-number').style.backgroundColor = '#222';
    document.querySelector('.guessed-number').style.width = '15rem';
    document.querySelector('.guessed-number').textContent = computerGuess;
  });
