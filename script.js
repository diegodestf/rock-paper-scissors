const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const actionMessage = document.getElementById("action-message");
const playerScorePara = document.getElementById("player-score");
const computerScorePara = document.getElementById("computer-score");
const result = document.querySelector(".result > p");



let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    
    const rndInt = Math.floor(Math.random() * 3) + 1;
    
    if (rndInt === 1){
        return "r";
    } else if (rndInt === 2) {
        return "p";
    } else {
        return "s";
    }
    
}

function gameOver() {

    return playerScore === 5 || computerScore === 5;
}

function endGameMessage(){

    return playerScore > computerScore ? (result.textContent = `The final score is Player: ${playerScore} to Computer: ${computerScore}. Player Wins!`) : 
    (result.textContent =`The final score is Player: ${playerScore} to Computer: ${computerScore}. Computer Wins!`);


}

function convertChoice(choice){
    if (choice === 'r') {
        return "Rock";
    }else if (choice === 'p') {
        return "Paper";
    }else {
        return 'Scissors';
    }
}

function win(playerSelection, computerSelection){
    playerScore++;
    playerScorePara.textContent = playerScore;
    computerScorePara.textContent = computerScore;
    result.textContent = `You win! ${convertChoice(playerSelection)} beats ${convertChoice(computerSelection)}`;
    winGlow(playerSelection);
    
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    playerScorePara.textContent = playerScore;
    computerScorePara.textContent = computerScore;
    result.textContent = `You lose! ${convertChoice(computerSelection)} beats ${convertChoice(playerSelection)}`;
    loseGlow(playerSelection);

}

function draw(playerSelection, computerSelection){
    result.textContent = `It\'s a tie!`;
    drawGlow(playerSelection);
    
}

//Adding these functions because document.getElementById(playerSelection).classList.add(glow) does not work and I don't know why.
function winGlow(playerSelection){
    switch (playerSelection) {
        case 'r':
            document.getElementById('rock').classList.add("green-glow");
            setTimeout( () => document.getElementById('rock').classList.remove("green-glow"), 250);
            break;
        case 's':
            document.getElementById('scissors').classList.add("green-glow");
            setTimeout( () => document.getElementById('scissors').classList.remove("green-glow"), 250);
            break;
        case 'p':
            document.getElementById('paper').classList.add("green-glow");
            setTimeout( () => document.getElementById('paper').classList.remove("green-glow"), 250);
            break;

    }
}

function loseGlow(playerSelection) {
    switch (playerSelection) {
        case 'r':
            document.getElementById('rock').classList.add("red-glow");
            setTimeout( () => document.getElementById('rock').classList.remove("red-glow"), 250);
            break;
        case 's':
            document.getElementById('scissors').classList.add("red-glow");
            setTimeout( () => document.getElementById('scissors').classList.remove("red-glow"), 250);
            break;
        case 'p':
            document.getElementById('paper').classList.add("red-glow");
            setTimeout( () => document.getElementById('paper').classList.remove("red-glow"), 250);
            break;
    }

}
function drawGlow(playerSelection) {
    switch (playerSelection) {
        case 'r':
            document.getElementById('rock').classList.add("gray-glow");
            setTimeout( () => document.getElementById('rock').classList.remove("gray-glow"), 250);
            break;
        case 's':
            document.getElementById('scissors').classList.add("gray-glow");
            setTimeout( () => document.getElementById('scissors').classList.remove("gray-glow"), 250);
            break;
        case 'p':
            document.getElementById('paper').classList.add("gray-glow");
            setTimeout( () => document.getElementById('paper').classList.remove("gray-glow"), 250);
}

}

function game(playerSelection){
    const computerSelection = computerPlay();
    switch (playerSelection + computerSelection) {
        case 'pr':
        case 'sp':
        case 'rs':
            win(playerSelection, computerSelection);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(playerSelection, computerSelection)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(playerSelection, computerSelection);
            break;

    }
    if (gameOver()) {
        endGameMessage();
        setTimeout(function () {alert("Press F5 to play again.")}, 500)
        
    }
}  


    rock.addEventListener("click", () => game("r"));
    paper.addEventListener("click", () => game("p"));
    scissors.addEventListener("click", () => game("s"));

    