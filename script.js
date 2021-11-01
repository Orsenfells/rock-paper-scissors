function getRandomMove() {
    let availableMoves = ['paper', 'rock', "scissors"];
    
    return availableMoves[Math.floor(Math.random()*availableMoves.length)]
}

function computerPlay() {
    return getRandomMove()
}

function playRound(playerSelection, computerPlay) {
    if(playerSelection.toLowerCase() === 'rock') {
        if(computerPlay === 'scissors') {
            return "You win! Rock beats scissors"
        } else if (computerPlay === 'paper') {
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