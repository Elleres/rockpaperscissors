function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    let list = ["Rock", "Paper", "Scissors"]
    return list[getRandomInt(3)]
}
