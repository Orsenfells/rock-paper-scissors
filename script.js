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
            playerScore += 1
            return "You win! Rock beats scissors"
        } else if (computerPlay === 'paper') {
            computerScore += 1;
            return "You Lose! Paper beats Rock"
        } else if (computerPlay === 'rock') {
            ties += 1
            return "It's a tie! You both played Rock"
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if(computerPlay === 'scissors') {
            computerScore += 1
            return 'You Lose! Scissors beats Paper'
        } else if (computerPlay === 'paper') {
            ties += 1
            return "It's a tie! You both played paper"
        } else if (computerPlay === 'rock') {
            playerScore += 1
            return "You win! Paper beats rock"
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if(computerPlay === 'scissors') {
            ties += 1
            return "It's a tie! You both played scissors"
        } else if (computerPlay === 'paper') {
            playerScore += 1
            return "You win! Scissors beats paper"
            
        } else if (computerPlay === 'rock') {
            computerScore += 1
            return "You Lose! Rock beats scissors"
        }
    }
}
function updateDom(playerSelection, computerSelection, roundResult) {
    let domPlayerSelection = document.querySelector('#playerSelection')
    let domComputerSelection = document.querySelector('#computerSelection')
    let domRoundResult = document.querySelector('#roundResult')
    let domPlayerScore = document.querySelector('#playerScore')
    let domComputerScore = document.querySelector('#computerScore')
    let domTies = document.querySelector("#ties")
    let domWinner = document.querySelector(`#winner`)
    domTies.textContent = `Ties: ${ties}`
    domRoundResult.textContent = roundResult;
    domPlayerSelection.textContent = `Player Move: ${playerSelection}`;
    domComputerSelection.textContent = `Computer Move: ${computerSelection}`;
    domPlayerScore.textContent = `Player Score: ${playerScore}`;
    domComputerScore.textContent = `Computer Score: ${computerScore}`
    domWinner.textContent = getWinner()
}
function updateScore(winner) {
    return winner += 1;
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
function getWinner() {
    if(playerScore === 5){
        return 'You Win!'
    } 
    else if(computerScore === 5) {
        return 'Computer Wins!'
    }
    else if(ties === 5) {
        return `It's a Tie!`
    }
    else return
}
function handler(e) {
    let playerMove = e.target.textContent.toLowerCase()
    let computerMove = getRandomMove()
    let roundResult = playRound(playerMove, computerMove)
    updateDom(playerMove, computerMove, roundResult)
    if(getWinner()) {
        playerScore = 0;
        computerScore = 0
        ties = 0;
    }
}
const rockButton = document.querySelector('#selectRock');
const paperButton = document.querySelector('#selectPaper');
const scissorsButton = document.querySelector('#selectScissors');
const buttons = [rockButton, paperButton, scissorsButton]
let playerScore = 0;
let computerScore = 0;
let ties = 0;
buttons.forEach(button => button.addEventListener('click', handler))
