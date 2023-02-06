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


function oneGame() {
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    currentGame.innerText = `${playerChoice} x ${computerChoice}`;
    gameResult.innerText = `${result}`;
    if (result == "You won!") {
        playerScore++;
    } else if (result == "You lost!") {
        computerScore++;
    }
    gameScore.innerText = `${playerScore} x ${computerScore}`
}

let playerScore = 0;
let computerScore = 0;

const gameResult = document.getElementById("gameResult");
const rockOption = document.getElementById("rock");
const paperOption = document.getElementById("paper");
const scissorsOption = document.getElementById("scissors");
const currentGame = document.getElementById("currentGame")
const gameScore = document.getElementById('gameScore')


rockOption.addEventListener('click', (e) => {
    playerChoice = 'Rock';
    oneGame();
})

paperOption.addEventListener('click', (e) => {
    playerChoice = 'Paper';
    oneGame();

})

scissorsOption.addEventListener('click', (e) => {
    playerChoice = 'Scissors';
    oneGame();

})


