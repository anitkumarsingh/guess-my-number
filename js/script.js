'use strict';
/*
console.log(document.querySelector('.msg').textContent);
document.querySelector('.msg').textContent = 'Correct Number!';

document.querySelector('.guessed-number').textContent =12;

document.querySelector('.score-number').textContent = 20;
document.querySelector('.high-score').textContent = 10;

document.querySelector('.enter-number').value = 20;

*/

document.querySelector('.btn-check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.enter-number').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.msg').textContent = ' ⛔ No number';
  }
});
