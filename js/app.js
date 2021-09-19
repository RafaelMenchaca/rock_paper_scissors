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
    // userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
    gameOver(userScore, computerScore);
    imagenUserChoice();
    imagenComputerChoice();
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
    // compuChoiceDisplay.innerHTML = computerChoice;
}

function imagenUserChoice(){
    if(userChoice === 'rock' ){
        userChoiceDisplay.innerHTML = `<img id="rock" src="https://res.cloudinary.com/dxw0z7q5k/image/upload/v1632018430/piedra-col_zjoavn.png" alt="Rock">`;
    }
    if(userChoice === 'paper'){
        userChoiceDisplay.innerHTML = `<img id="paper" src="https://res.cloudinary.com/dxw0z7q5k/image/upload/v1632018430/papel-col_fwhtsc.png" alt="Paper">`
    }
    if(userChoice === 'scissors'){
        userChoiceDisplay.innerHTML = `<img id="scissors" src="https://res.cloudinary.com/dxw0z7q5k/image/upload/v1632018430/tijeras-col_cgtjir.png" alt="Scissors">`;
    }
}
function imagenComputerChoice(){
    if(computerChoice === 'rock' ){
        compuChoiceDisplay.innerHTML = `<img id="rock" src="https://res.cloudinary.com/dxw0z7q5k/image/upload/v1632018430/piedra-col_zjoavn.png" alt="Rock">`;
    }
    if(computerChoice === 'paper'){
        compuChoiceDisplay.innerHTML = `<img id="paper" src="https://res.cloudinary.com/dxw0z7q5k/image/upload/v1632018430/papel-col_fwhtsc.png" alt="Paper">`
    }
    if(computerChoice === 'scissors'){
        compuChoiceDisplay.innerHTML = `<img id="scissors" src="https://res.cloudinary.com/dxw0z7q5k/image/upload/v1632018430/tijeras-col_cgtjir.png" alt="Scissors">`;
    }
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
        result = `<p style="color: yellow;">It's a Draw!</p>`;
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = `<p style="color: green;">Paper beat Rock, You Win!</p>`
        winUser()
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = `<p style="color: red;">Rock beat Scissors, You Lose!</p>`
        winComputer()
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = `<p style="color: green;">Scissors beat Paper, You Win!</p>`
        winUser()
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = `<p style="color: red;">Paper beat Rock, You Lose!</p>`
        winComputer()
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = `<p style="color: green;">Rock beat Scissors, You Win!</p>`
        winUser()
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = `<p style="color: red;">Scissors beat paper, You Lose!</p>`
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
        resultDisplay.innerHTML = "";
    } else if ( compu === 5 && compu > user){
        alert("Game Over You Lose!");
        userScore = 0;
        computerScore = 0;
        userScore_span.innerHTML = 0;
        computerScore_span.innerHTML = 0;
        resultDisplay.innerHTML = "";
    }
}

