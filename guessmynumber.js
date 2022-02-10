'use strict';

let again = document.querySelector('.again');
let number = document.querySelector('.number');

let check = document.querySelector('.check');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let guessInput = document.querySelector('.guess')
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highestScore = 0;
// number.textContent = secretNumber;


let displayMessage = function (msg) {
    message.textContent = msg;
}

check.addEventListener('click', function () {
    console.log(secretNumber);
    const guess = Number(guessInput.value);
    console.log(guess);
    if (!guess) {
        displayMessage(`⛔️ No number!entered `);
    }
    else if (guess === secretNumber) {
        displayMessage(`🎉 Correct Number! ${currentScore}`);
        console.log(currentScore);
        number.textContent = secretNumber;
        document.querySelector('.maincontainer').style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        check.setAttribute("disabled", true);
        check.style.cursor = 'not-allowed';


        if (currentScore > highestScore) {
            highestScore = currentScore;
            highscore.textContent = highestScore;
        }
    }
    else if (guess !== secretNumber) {
        if (currentScore > 1) {
            if (guess > secretNumber) {
                displayMessage('📈 Too high!');
            } else {
                displayMessage('📉 Too low!');
            }
            currentScore--;
            score.textContent = currentScore;
            console.log(currentScore);
        }
        else {
            displayMessage('💥 You lost the game!');
            score.textContent = 0;
        }
    }
});

again.addEventListener('click', function () {
    displayMessage('Start guessing...');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    currentScore = 20;
    score.textContent = 20;
    number.textContent = "?";
    guessInput.value = "";
    document.querySelector('.maincontainer').style.backgroundColor = '#222';
    number.style.width = '15rem';
    check.removeAttribute("disabled");
    check.style.cursor = 'pointer';
})

