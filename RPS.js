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
const computerChoice = '';
const userChoice = '';

// each round state choices and determine result
function playRound(userChoice, computerChoice) {
    userChoice = getUserChoice();
    computerChoice = getComputerChoice();
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

// play game
function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let rounds = prompt('How many rounds would you like to play? (odd number between 1 and 9)')
    for (let i = 0; i < rounds; i++) {
        const roundResult = playRound(userChoice, computerChoice);
        console.log(roundResult);
        if (roundResult === 'You won!') {
            userScore++;
        } else if (roundResult === 'Computer won!') {
            computerScore++;
        }
    }
    if (userScore > computerScore) {
        console.log('You won the game!');
    } else if (userScore < computerScore) {
        console.log('Computer won the game!');
    } else {
        console.log('The game is a tie!');
    }
}
playGame();