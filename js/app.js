let userScore     = 0;
let computerScore = 0;
const userScore_span     = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div     = document.getElementById('.score-board');
const userChoiceDisplay  = document.getElementById('user-choice');
const compuChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay      = document.getElementById('resultado');
const possibleChoices    = document.querySelectorAll('img');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
    gameOver(userScore, computerScore);
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices
    
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    compuChoiceDisplay.innerHTML = computerChoice;
}

function winUser() {
    userScore++;
    userScore_span.innerHTML = userScore;
}

function winComputer() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
}

// rock beat scissors, scissors beat paper , paper beat rock 
function getResult(){
    if (computerChoice === userChoice){
        result = `It's a draw!`;
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'Paper beat Rock, You Win!'
        winUser()
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'Rock beat Scissors, You Lose!'
        winComputer()
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'Scissors beat Paper, You Win!'
        winUser()
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'Paper beat Rock, You Lose!'
        winComputer()
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'Rock beat Scissors, You Win!'
        winUser()
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'Scissors beat paper, You Lose!'
        winComputer()
    }
    resultDisplay.innerHTML = result;
}

function gameOver(user, compu){
    if(user === 5 && user > compu){
        alert("Game Over You Win!");
        userScore = 0;
        computerScore = 0;
        userScore_span.innerHTML = 0;
        computerScore_span.innerHTML = 0;
    } else if ( compu === 5 && compu > user){
        alert("Game Over You Lose!");
        userScore = 0;
        computerScore = 0;
        userScore_span.innerHTML = 0;
        computerScore_span.innerHTML = 0;
    }
}

