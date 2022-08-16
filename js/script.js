'use strict';
/*
console.log(document.querySelector('.msg').textContent);
document.querySelector('.msg').textContent = 'Correct Number!';

document.querySelector('.guessed-number').textContent =12;

document.querySelector('.score-number').textContent = 20;
document.querySelector('.high-score').textContent = 10;

document.querySelector('.enter-number').value = 20;

*/

const computerGuess = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.guessed-number').textContent = computerGuess;
let score = 20;

document.querySelector('.btn-check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.enter-number').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.msg').textContent = ' ⛔ No number!';
  }else if(guess === computerGuess){
    document.querySelector('.msg').textContent = '🎉 Correct Number!';
  }else if(guess < computerGuess){
    if(score > 1){
      document.querySelector('.msg').textContent = '📉 Too Low!...';
      score--;
      document.querySelector('.score-number').textContent = score;
    }else{
      document.querySelector('.msg').textContent = '😬 You lost the game';
      document.querySelector('.score-number').textContent = 0;
    }
  }else if(guess > computerGuess){
    if(score > 1){
      document.querySelector('.msg').textContent = '📈 Too High!...';
      score--;
      document.querySelector('.score-number').textContent = score;
    }else{
      document.querySelector('.msg').textContent = '😬 You lost the game';
      document.querySelector('.score-number').textContent = 0;
    }
  }
});
