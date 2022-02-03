function computerPlay() {
    
    const rndInt = Math.floor(Math.random() * 3) + 1;
    
    if (rndInt === 1){
        return "Rock";
    } else if (rndInt === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
    
}

let playerScore = 0;
let computerScore = 0;

function gameOver() {

    return playerScore === 5 || computerScore === 5;
}

function endGameMessage(){

    return playerScore > computerScore ? (scoreHeading.textContent = `The final score is Player: ${playerScore} to Computer: ${computerScore}. Player Wins!`) : 
    `The final score is Player: ${playerScore} to Computer: ${computerScore}. Computer Wins!`;


}


function singleRound(e) {
    if (gameOver()) {
        alert("Game over. Press F5 to play again");
        return;
    }
    
    const computerSelection = computerPlay();
    const playerSelection = e.target.id.toLowerCase();
    updateScore(roundWinner(playerSelection, computerSelection));
}

function roundWinner(playerSelection, computerSelection){
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === "Rock") {
                scoreHeading.textContent = "It\'s a tie!"
            } else if (computerSelection === "Paper") {
                scoreHeading.textContent = "You lose! Paper beats Rock";
            } else {
                scoreHeading.textContent = "You win! Rock beats Scissors";
            }
            break;
            
            case 'paper':
                if (computerSelection === "Rock") {
                    scoreHeading.textContent = "You win! Paper beats Rock";
                } else if (computerSelection === "Paper") {
                    scoreHeading.textContent = "It\'s a tie!";
                } else {
                    scoreHeading.textContent = "You lose! Scissors beats Paper!";
                }
                break;
                
                case 'scissors':
                    if (computerSelection === "Rock") {
                        scoreHeading.textContent = "You lose! Rock beats Scissors";
                    } else if (computerSelection === "Paper") {
                        scoreHeading.textContent = "You win! Scissors beats Paper";
                    } else {
                        scoreHeading.textContent = "It\'s a tie!";
                    }
                break;

    }
}
    
function updateScore(winner) {
    if (scoreHeading.textContent.startsWith("It")) {
        return;
    } else if (scoreHeading.textContent.startsWith("You win")) {
        playerScore++;
    } else if (scoreHeading.textContent.startsWith("You lose")) {
        computerScore++;
    }
    playerScorePara.textContent = `Player:  ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;

    if (gameOver()){
        endGameMessage();
    }
}       

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scoreHeading = document.querySelector("#score-heading");
const playerScorePara = document.querySelector("#player-score");
const computerScorePara = document.querySelector("#computer-score");

rock.addEventListener("click", singleRound);
paper.addEventListener("click", singleRound);
scissors.addEventListener("click", singleRound);