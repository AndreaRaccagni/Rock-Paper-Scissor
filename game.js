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
    let playerchoice = +prompt('Select:\n0 for Rock\n1 for Paper\n2 for Scissors');
    if (playerchoice === 0) {
        return 'Rock';
    } else if (playerchoice === 1) {
        return 'Paper';
    } else if (playerchoice === 2) {
        return 'Scissors';
    } else {
        alert('You must input 1, 2 or 3');
    }
}

// Function that evaluate who wins
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
            return 'You Lose! Scissors beat Paper'
        }
    } else {
        if (computerSelection === 'Rock'){
            return 'You Lose! Rock beats Scissors'
        } else {
            return 'You Win! Scissors beat Paper'
        }
    }
}

let player = playerPlay();
console.log(player);
let computer = computerPlay();
console.log(computer);
console.log(playRound(player, computer))
