const btn = document.querySelectorAll('.btn');
const resultDiv = document.querySelector('#show-result');
const playerPoints = document.querySelector('#player-points');
const cpuPoints = document.querySelector('#cpu-points');

let playerScore = 0;
let cpuScore = 0;

// Button selection and result of a single game
btn.forEach(e => e.addEventListener('click', (e) => {
    console.log(e.target.id);
    const player = e.target.id;
    const computer = computerPlay()
    const whoWin = playRound(player, computer);
    const actualScore = trackScore(whoWin);
    const outputText = document.createTextNode(`${whoWin}`);
    resultDiv.replaceChildren(outputText);
    playerPoints.replaceChildren(document.createTextNode(`${actualScore[0]}`));
    cpuPoints.replaceChildren(document.createTextNode(`${actualScore[1]}`));
    console.log(checkForWinner(playerScore, cpuScore))
}));

// Function that returns the random cpu choice
function computerPlay() {
    let cpuchoice = Math.floor(Math.random()*3);
    if (cpuchoice === 0) {
        return 'rock';
    } else if (cpuchoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Function that plays a single match
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'This is a tie!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock';
        } else {
            return 'You Win! Rock beats Scissors';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Win! Paper beats Rock';
        } else {
            return 'You Lose! Scissors beat Paper';
        }
    } else {
        if (computerSelection === 'rock'){
            return 'You Lose! Rock beats Scissors';
        } else {
            return 'You Win! Scissors beat Paper';
        }
    }
};

// Function that tracks the score
function trackScore (handWinner) {
    if (handWinner.includes('Win')) playerScore += 1;
    else if (handWinner.includes('Lose')) cpuScore += 1;
    return [playerScore, cpuScore]; 
};

// Function that checks for a winner
function checkForWinner(playerScore, cpuScore) {
    if (playerScore === 5) {
        // buttons disappear and a play again button pops in
        return 'Awesome! You win!';
    } else if (cpuScore === 5) {
        // buttons disappear and a play again button pops in
        return 'Darn it! You lose!';
    };
}

// Function to buttons disappear and a play again button pops in
