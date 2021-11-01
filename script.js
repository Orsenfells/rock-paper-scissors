function getRandomMove() {
    let availableMoves = ['Paper', 'Rock', "scissors"];
    
    return availableMoves[Math.floor(Math.random()*availableMoves.length)]
}

function computerPlay() {
    return getRandomMove()
}