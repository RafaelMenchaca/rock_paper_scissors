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

// rock beat scissors, scissors beat paper , paper beat rock 
function getResult(){
    if (computerChoice === userChoice){
        result = `It's a draw!`;
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'Paper beat Rock, You Win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'Rock beat Scissors, You Lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'Scissors beat Paper, You Win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'Paper beat Rock, You Lose!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'Rock beat Scissors, You Win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'Scissors beat paper, You Lose!'
    }
    resultDisplay.innerHTML = result;
}