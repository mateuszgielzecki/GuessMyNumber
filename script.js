'use strict';

const inputNumber = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
const number = document.querySelector('.number');

let randomNumber = Math.floor(Math.random() * 20) + 1;
let scoreValue = 20;
let newHighScore = 0;

const displayMessage = function (newMessage) {
    message.textContent = newMessage;
};

const checkNumber = () => {
    const userNumber = Number(inputNumber.value);

    if (!userNumber) {
        displayMessage('⛔️ No number!');
    }
    else if (randomNumber === userNumber) {
        displayMessage('🎉 Correct Number!');
        number.textContent = `${randomNumber}`;
        document.body.style.backgroundColor = 'lime';
        number.style.width = '30rem';

        if (scoreValue > newHighScore) {
            newHighScore = scoreValue;
            highScore.textContent = newHighScore;
        }
    } else if (randomNumber !== userNumber) {
        if (scoreValue > 1) {
            displayMessage(randomNumber < userNumber ? '📈 Too high!' : '📉 Too low!');
            scoreValue--;
            score.textContent = scoreValue;
        } else {
            displayMessage('💥 You lost the game!');
            score.textContent = 0;
        }
    }
    console.log(randomNumber, userNumber);
}

const newGame = function () {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    scoreValue = 20;

    score.textContent = scoreValue;
    displayMessage('Start guessing...');
    document.body.style.backgroundColor = '#222';
    number.style.width = '15rem';
    inputNumber.value = '';
    number.textContent = `?`;
}

btnCheck.addEventListener('click', checkNumber);
btnAgain.addEventListener('click', newGame);
