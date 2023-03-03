alert('Welcome to Rock, Paper, Scissors!');
// get computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// get user choice & validate
function getUserChoice(userInput) {
    userInput = prompt(' Please select your tool').toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error!');
        alert('Error! Please enter rock, paper, or scissors.');
    }
}

// define variables for user choice and computer choice
const computerChoice = getComputerChoice();
const userChoice = getUserChoice('rock');

// state choices and determine result
function playRound(userChoice, computerChoice) {
    console.log('Computer threw: ' + computerChoice);
    console.log('You threw: ' + userChoice);
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won!';
        } else {
            return 'You won!';
        }
    }
}