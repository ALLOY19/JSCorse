let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You lose';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }
    } if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    const computerRock = document.querySelector('.computer-rock')
    const computerPaper = document.querySelector('.computer-paper')
    const computerscissors = document.querySelector('.computer-scissors')

    const bigHandPlayer = document.querySelector('.big-hand-player')
    const bigHandComputer = document.querySelector('.big-hand-computer')



    if (computerMove === "rock") {
        computerRock.style.color = "#ffcc00"
        bigHandComputer.classList.add('fa-hand-fist',   'icon-computer-animation')
    } else {
        computerRock.style.color = "aliceblue"
        bigHandComputer.classList.remove('fa-hand-fist')

    }
    if (computerMove === "paper") {
        computerPaper.style.color = "#ffcc00"
        bigHandComputer.classList.add('fa-hand')
    } else {
        computerPaper.style.color = "aliceblue"
        bigHandComputer.classList.remove('fa-hand')
    }
    if (computerMove === "scissors") {
        computerscissors.style.color = "#ffcc00"
        bigHandComputer.classList.add('fa-hand-peace')
    } else {
        computerscissors.style.color = "aliceblue"
        bigHandComputer.classList.remove('fa-hand-peace')
    }


    if (playerMove === "rock") {
        bigHandPlayer.classList.add('fa-hand-fist')
    } else {
        bigHandPlayer.classList.remove('fa-hand-fist')
    }
    if (playerMove === "paper") {
        bigHandPlayer.classList.add('fa-hand')
    } else {
        bigHandPlayer.classList.remove('fa-hand')
    }
    if (playerMove === "scissors") {
        bigHandPlayer.classList.add('fa-hand-peace')
    } else {
        bigHandPlayer.classList.remove('fa-hand-peace')
    }



}


function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function resetBtn() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}

