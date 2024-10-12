let paragraphResult = document.querySelector('.js-result');
let paragraphMoves = document.querySelector('.js-moves');
let paragraphScore = document.querySelector('.js-score');
let score = JSON.parse(localStorage.getItem('score')) || {
wins:0,
losses: 0,
ties: 0
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
if(!isAutoPlaying) {
    intervalId = setInterval(function() {
        const playerMove = pickComputerMove();
        playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
} else {
    clearInterval(intervalId);
    isAutoPlaying = false;
}
}
function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

if (playerMove === 'Scissors') {

    if (computerMove === 'Scissors') {
        result = 'Tie.'
    } else if  (computerMove === 'Rock') {
        result = 'You lose.'
    } else if (computerMove === 'Paper') {
        result = 'You win.'
    }

    } else if (playerMove === 'Paper') {
    if (computerMove === 'Paper') {
    result = 'Tie.'
    } else if  (computerMove === 'Scissors') {
        result = 'You lose.'
    } else if (computerMove === 'Rock') {
        result = 'You win.'
    }
    
    } else if ('Rock') {
        if (computerMove === 'Rock') {
    result = 'Tie.'
    } else if  (computerMove === 'Paper') {
        result = 'You lose.'
    } else if (computerMove === 'Scissors') {
        result = 'You win.'
    }
    }

    if(result === 'You win.') {
        score.wins = score.wins +=1;
    } else if (result === 'You lose.') {
        score.losses = score.losses +=1;
    } else {
        score.ties = score.ties +=1
    }

    localStorage.setItem('score', JSON.stringify(score));

paragraphResult.innerText = (`${result}`);
paragraphMoves.innerHTML = (`You <img src="../assets/${playerMove}.png"> X <img src="../assets/${computerMove}.png">`)
paragraphScore.innerText = (`\nScore: Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`)
}

function pickComputerMove() {
randomNum = Math.random();

if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = 'Scissors'
} else if (randomNum >= 1/3 && randomNum < 2 / 3) {
    computerMove = 'Rock'
} else if (randomNum >= 2/3 && randomNum <= 1) {
    computerMove = 'Paper'
}

return computerMove;
}
function scoreReset() {
score.wins = 0,
score.losses = 0,
score.ties = 0
localStorage.removeItem('score')
document.querySelector('.js-result').innerText = 'Score Reseted !';
document.querySelector('.js-moves').innerText = '';
document.querySelector('.js-score').innerText = '';
}