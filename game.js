
const playerBtn = document.querySelectorAll('#player > .buttons > .btn');
const cpuBtn = document.querySelectorAll('#cpu > .buttons > .btn');
const handWinnerDiv = document.querySelector('#show-hand-winner');
const playerPoints = document.querySelector('#player-points');
const cpuPoints = document.querySelector('#cpu-points');
const containerDivs = document.querySelectorAll('#container div')
const container = document.querySelector('#container')

let playerScore = 0;
let cpuScore = 0;

// Function that plays a single game
playerBtn.forEach(e => e.addEventListener('click', (e) => {
    const player = e.target.id;
    const computer = computerPlay()
    const whoWin = playRound(player, computer);
    const actualScore = trackScore(whoWin);
    const outputText = document.createTextNode(`${whoWin}`);
    handWinnerDiv.replaceChildren(outputText);
    highlightButton (playerBtn, player);
    highlightButton (cpuBtn, computer);
    playerPoints.replaceChildren(document.createTextNode(`${actualScore[0]}`));
    cpuPoints.replaceChildren(document.createTextNode(`${actualScore[1]}`));
    const matchWinner = checkForWinner(actualScore[0], actualScore[1]);
    if (matchWinner !== undefined) showWinner(matchWinner);
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
        return 'Awesome! You win!\n\nYou\'re a Rock-Paper-Scissor sensei master!';
    } else if (cpuScore === 5) { 
        return 'Darn it! You lose!\n\nYou need some more of "Wax on... Wax off, wax on... wax off"';
    };
}

// Function that highlight the selections
function highlightButton (btnNodeList, selection) {
    btnNodeList.forEach(element => element.style.background = "whitesmoke");
    for (let i = 0; i < btnNodeList.length; i++) {
        if (btnNodeList[i].id === selection) btnNodeList[i].style.background = "#f0e973";
    }
};

// Function that ends the game
function fadeOutContainer (...args) {
    containerDivs.forEach(e => e.classList.add('fade-out'));
    playerBtn.forEach(e => e.classList.add('block-button'));
};

// Function that shows the winner
function showWinner (winner) {
    fadeOutContainer(container, playerBtn);
    const endGameDiv = document.createElement('div');
    const matchWinnerDiv = document.createElement('div');
    const replayBtn = document.createElement('button');
    endGameDiv.appendChild(matchWinnerDiv);
    endGameDiv.appendChild(replayBtn);
    endGameDiv.classList.add('end-game');
    matchWinnerDiv.classList.add('match-winner-text');
    replayBtn.classList.add('button-86');
    const matchWinnerText = document.createTextNode(`${winner}`);
    const playAgainText = document.createTextNode(`PLAY AGAIN!`);
    matchWinnerDiv.replaceChildren(matchWinnerText);
    replayBtn.replaceChildren(playAgainText);
    setTimeout(() => document.body.replaceChild(endGameDiv, container), 4000);
    replayBtn.onclick = () => location.href = "index.html";
};
