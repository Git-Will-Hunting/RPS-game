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
    userInput = prompt(' Please select your tool (rock, paper, or scissors):')
    if (userInput === null) {
        console.log('Error! user cancelled input.');
        alert('Error! Please enter rock, paper, or scissors.');
        return getUserChoice(userInput);
    }
    else userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        console.log('User entered: ' + userInput);
        return userInput;
    } else {
        console.log(userInput);
        console.log('Error! user entered invalid input.');
        alert('Error! Please enter rock, paper, or scissors.');
        return getUserChoice(userInput);
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
        console.log('The round is a tie! Play again.');
        return playRound(userChoice, computerChoice);
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

// decide number of rounds
function getRounds() {
    let rounds = prompt('How many rounds would you like to play? (odd number between 1 and 9)');
    if (rounds === null) {
        console.log('Error! user cancelled input.');
        alert('Error! Please enter an odd number between 1 and 9.');
        return getRounds();
    }
    if (isNaN(rounds)) {
        console.log(rounds);
        console.log('Error! user entered a non-number.');
        alert('Error! Please enter an odd number between 1 and 9.');
        return getRounds();
    }
    if (rounds % 2 === 0) {
        console.log(rounds);
        console.log('Error! user entered an even number.');
        alert('Error! Please enter an odd number between 1 and 9.');
        return getRounds();
    } else {
        rounds = parseInt(rounds);
        console.log('Number of rounds chosen: ' + rounds);
        return rounds;
    }
}

// define game function
function playGame() {
    let userScore = 0;
    let computerScore = 0;
    const rounds = getRounds();
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

// call game function
playGame();