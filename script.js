function getRandomMove() {
    let availableMoves = ['paper', 'rock', "scissors"];
    
    return availableMoves[Math.floor(Math.random()*availableMoves.length)]
}
function getUserMove() {
    return prompt("Rock Paper Scissors", "rock")
}
function getWinner(playerScore, computerScore) {
    if(playerScore > computerScore) {
        alert("The Player Wins!")
    } else if (playerScore < computerScore) {
        alert("The Computer Wins!")
    } else alert("It's a Tie!")
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
function updateDom(playerSelection, computerSelection) {
    let domPlayerSelection = document.querySelector('#playerSelection')
    let domComputerSelection = document.querySelector('#computerSelection')

    domPlayerSelection.textContent = `Player Move: ${playerSelection}`
    domComputerSelection.textContent = `Computer Move: ${computerSelection}`
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
    console.log(userScore, computerScore)
    getWinner(userScore, computerScore)
}
const rockButton = document.querySelector('#selectRock');
const paperButton = document.querySelector('#selectPaper');
const scissorsButton = document.querySelector('#selectScissors');
const buttons = [rockButton, paperButton, scissorsButton]
function handler(e) {
    let playerMove = e.target.textContent.toLowerCase()
    let computerMove = getRandomMove() 
    updateDom(playerMove, computerMove)
    console.log(playRound(playerMove, computerMove))
}
buttons.forEach(button => button.addEventListener('click', handler))
