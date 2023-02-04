function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    let list = ["Rock", "Paper", "Scissors"]
    return list[getRandomInt(3)]
}
function playRound(player, computer) {
    if (player == computer) {
        return "Draw"
    } else if (player == "Rock" && computer == "Scissors" || player == "Paper" && computer == "Rock" || player == "Scissors" && computer == "Paper") {
        return "You won!"
    } else {
        return "You lost!"
    }
    
}
