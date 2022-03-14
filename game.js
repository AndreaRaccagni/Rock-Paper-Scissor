// Function that returns the random cpu choice
function computerPlay() {
    let cpuchoice = Math.floor(Math.random()*3);
    if (cpuchoice === 0) {
        return 'Rock';
    } else if (cpuchoice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// Function that prompts the user and returns the choice
function playerPlay() {
    let playerchoice = +prompt('Select:\n1 for Rock\n2 for Paper\n3 for Scissors');
    if (playerchoice === 1) {
        return 'Rock';
    } else if (playerchoice === 2) {
        return 'Paper';
    } else if (playerchoice === 3) {
        return 'Scissors';
    } else {
        alert('You must choose 1, 2 or 3');
    }
}

// Function that plays a single match
function playRound(playerSelection, computerSelection) {
    console.log(`You played ${playerSelection} and the computer played ${computerSelection}.`);
    if (playerSelection === computerSelection) {
        return 'Whoa! This is a tie!';
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            return 'You Lose! Paper beats Rock';
        } else {
            return 'You Win! Rock beats Scissors';
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return 'You Win! Paper beats Rock';
        } else {
            return 'You Lose! Scissors beat Paper';
        }
    } else {
        if (computerSelection === 'Rock'){
            return 'You Lose! Rock beats Scissors';
        } else {
            return 'You Win! Scissors beat Paper';
        }
    }
}

// Function to play a five round game
function game() {
    let playerScore = 0;
    let cpuScore = 0;

    for (let i = 0; i < 5; i++) {
        let player = playerPlay();
        console.log(`Player: ${player}`);
        let computer = computerPlay();
        console.log(`Computer: ${computer}`);
        let whoWon = playRound(player, computer);
        console.log(`Round ${i + 1}: ${whoWon}`);
        if (whoWon.includes('Win')) {
            playerScore += 1;
        } else if (whoWon.includes('Lose')) {
            cpuScore += 1;
        }
    }

    if (playerScore > cpuScore) {
        alert('Amazing! You win! :)');
    } else if (playerScore < cpuScore) {
        alert('Sad story...Computer wins :(');
    } else {
        alert('What a battle! It\'s a tie :|');
    }
}

console.log(game());
