const btn = document.querySelectorAll('.btn');
const player = btn.forEach(e => e.addEventListener('click', (e) => {
    const player = e.target.id;
    const computer = computerPlay()
    const result = playRound(player, computer);
    console.log(result);
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
        return 'Whoa! This is a tie!';
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
}

// Function to play a five round game
// function game() {
//     let playerScore = 0;
//     let cpuScore = 0;

//     for (let i = 0; i < 5; i++) {
//         let player = playerPlay();
//         console.log(`Player: ${player}`);
//         let computer = computerPlay();
//         console.log(`Computer: ${computer}`);
//         let whoWon = playRound(player, computer);
//         console.log(`Round ${i + 1}: ${whoWon}`);
//         if (whoWon.includes('Win')) {
//             playerScore += 1;
//         } else if (whoWon.includes('Lose')) {
//             cpuScore += 1;
//         }
//     }

//     if (playerScore > cpuScore) {
//         alert('Amazing! You win! :)');
//     } else if (playerScore < cpuScore) {
//         alert('Sad story...Computer wins :(');
//     } else {
//         alert('What a battle! It\'s a tie :|');
//     }
// }
