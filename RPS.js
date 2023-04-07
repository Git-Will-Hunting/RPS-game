//alert('Welcome to Rock, Paper, Scissors!');
// get all interactive elements
const options = document.querySelectorAll('.options > button');
const startBtn = document.querySelector('.start');
const roundsEntry = document.querySelector('.rounds > input');
const scoresTable = document.querySelector('.scores');

// set required variables
let roundsPlayed = 0;
let userChoice = '';
let computerChoice = '';
let userScore = 0;
let computerScore = 0;
const scores = [];


// get computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            computerChoice = 'rock';
            return 'rock';
        case 1:
            computerChoice = 'paper';
            return 'paper';
        case 2:
            computerChoice = 'scissors';
            return 'scissors';
    }
}
// update scores table
function updateTable() {
    scores.push([roundsPlayed, userChoice, computerChoice, userScore, computerScore]);
    scoresTable.innerHTML = '';
    scoresTable.innerHTML = '<tr><th>Round</th><th>You</th><th>Computer</th><th>Your Score</th><th>Computer Score</th></tr>';
    for (let i = 0; i < scores.length; i++) {
        scoresTable.innerHTML += '<tr><td>' + scores[i][0] + '</td><td>' + scores[i][1] + '</td><td>' + scores[i][2] + '</td><td>' + scores[i][3] + '</td><td>' + scores[i][4] + '</td></tr>';
    }
}

// each round state choices and determine result
function playRound(e, computerChoice) {
    userChoice = this.name;
    computerChoice = getComputerChoice();
    console.log('Computer threw: ' + computerChoice);
    console.log('You threw: ' + userChoice);
    if (userChoice === computerChoice) {
        console.log('The round is a tie! Play again.');
        return;
    }
    if (userChoice === 'rock') {
        roundsPlayed += 1;
        if (computerChoice === 'paper') {
            computerScore++;
            console.log('Computer won!');
        } else {
            userScore++;
            console.log('You won!');
        }
    }
    if (userChoice === 'paper') {
        roundsPlayed += 1;
        if (computerChoice === 'scissors') {
            computerScore++;
            console.log('Computer won!');
        } else {
            userScore++;
            console.log('You won!');
        }
    }
    if (userChoice === 'scissors') {
        roundsPlayed += 1;
        if (computerChoice === 'rock') {
            computerScore++;
            console.log('Computer won!');
        } else {
            userScore++;
            console.log('You won!');
        }
    }
    updateTable();        
    if (roundsPlayed === rounds){
        if (userScore > computerScore) {
            alert('You won the game!');
        } else if (userScore < computerScore) {
            alert('Computer won the game!');
        } else {
            console.log('The game is a tie!');
        }
    }
}

// decide number of rounds
function getRounds() {
    rounds = roundsEntry.value;
    if (rounds === null) {
        console.log('Error! user cancelled input.');
        alert('Error! Please enter an odd number between 1 and 9.');
        
    }
    if (isNaN(rounds)) {
        console.log(rounds);
        console.log('Error! user entered a non-number.');
        alert('Error! Please enter an odd number between 1 and 9.');
        
    }
    if (rounds % 2 === 0) {
        console.log(rounds);
        console.log('Error! user entered an even number.');
        alert('Error! Please enter an odd number between 1 and 9.');
        
    } else {
        rounds = parseInt(rounds);
        console.log('Number of rounds chosen: ' + rounds);
    }
    return rounds;
}

// define game function
function newGame() {
    userScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    rounds = getRounds();
    scores.length = 0;
    scoresTable.innerHTML = '<tr><th>Round</th><th>You</th><th>Computer</th><th>Your Score</th><th>Computer Score</th></tr>';
    console.log('New game started!');
}

// call game function
// playGame();

// link buttons to functions
options.forEach(button => button.addEventListener('click', playRound));
startBtn.addEventListener('click', newGame);