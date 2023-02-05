function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let list = ["Rock", "Paper", "Scissors"];
    return list[getRandomInt(3)];
}
function playRound(player, computer) {
    if (player == computer) {
        return "Draw!";
    } else if (player == "Rock" && computer == "Scissors" || player == "Paper" && computer == "Rock" || player == "Scissors" && computer == "Paper") {
        return "You won!";
    } else {
        return "You lost!";
    }
}
function capitalize(text) {
    let firstLetter = text[0];
    let rest = text.slice(1);
    return firstLetter.toUpperCase() + rest.toLowerCase();
}

function game() {
    var playerWins = 0;
    var computerWins = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper or Scissors?");
        playerChoice = capitalize(playerChoice);
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result)
        if (result == "You won!") {
            playerWins++
        } else if (result == "Draw!") {
            draws++
        } else {
            computerWins++
        }
    }
    console.log(`Game Score: ${playerWins} x ${computerWins}`)
}

game()