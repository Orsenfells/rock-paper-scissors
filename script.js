function getRandomMove() {
    let availableMoves = ['paper', 'rock', "scissors"];
    
    return availableMoves[Math.floor(Math.random()*availableMoves.length)]
}

function computerPlay() {
    return getRandomMove()
}
function gameScore(userScore, computerScore) {

}
function playRound(playerSelection, computerPlay, userWin) {
    if(playerSelection.toLowerCase() === 'rock') {
        if(computerPlay === 'scissors') {
            userWin(true)
            return "You win! Rock beats scissors"
        } else if (computerPlay === 'paper') {
            userWin(false)
            return "You Lose! Paper beats Rock"
        } else if (computerPlay === 'rock') {
            return "It's a tie! You both played Rock"
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if(computerPlay === 'scissors') {
            return 'You Lose! Scissors beats Paper'
        } else if (computerPlay === 'paper') {
            return "It's a tie! You both played paper"
        } else if (computerPlay === 'rock') {
            return "You win! Paper beats rock"
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if(computerPlay === 'scissors') {
            return "It's a tie! You both played scissors"
        } else if (computerPlay === 'paper') {
            return "You win! Scissors beats paper"
        } else if (computerPlay === 'rock') {
            return "You Lose! Rock beats scissors"
        }
    }
}
function getUserMove() {
    return prompt("Rock Paper Scissors", "rock")
}
function game() {
    let userScore = 0;
    let computerScore = 0;
    function updateScore(userWin) {
        if (userWin === true) {
            userScore++
        } else computerScore++
    }
    for(let i = 0; i < 5; i++) {
        let result = playRound(getUserMove(), computerPlay(), updateScore)
        console.log(result, userScore, computerScore)
    }
}