function computerPlay() {
    //Get the computer choice

    const rndInt = Math.floor(Math.random() * 3) + 1;

    if (rndInt === 1){
        return "Rock"
    } else if (rndInt === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
    
}

function singleRound(playerSelection, computerSelection) {

    

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === "Rock") {
                return "It\'s a tie!"
            } else if (computerSelection === "Paper") {
                return "You lose! Paper beats Rock"
            } else {
                return "You win! Rock beats Scissors"
            }
            break;

        case 'paper':
            if (computerSelection === "Rock") {
                return "You win! Paper beats Rock";
            } else if (computerSelection === "Paper") {
                return "It\s a tie!";
            } else {
                return "You lose! Scissors beats Paper!";
            }
            break;

        case 'scissors':
            if (computerSelection === "Rock") {
                return "You lose! Rock beats Scissors";
            } else if (computerSelection === "Paper") {
                return "You win! Scissors beats Paper";
            } else {
                return "It\s a tie!";
            }
            break;

    }   
    
}

function game(){
    let playGame = prompt("Do you want to play the game? Y/N");

    if (playGame === "Y") {
        let playerScore = 0;
        let computerScore = 0;
    for (let i = 1; i < 6; i++){
        let userChoice = prompt("Please choose, Rock, Paper or Scissors").toLowerCase();
        let computerChoice = computerPlay();
        let roundResult = singleRound(userChoice, computerChoice)
        if (roundResult.startsWith("You win")) {
            console.log(`Player chooses ${userChoice}, computer chooses ${computerChoice}. Player wins round!`)
            playerScore += 1;
        } else if (roundResult.startsWith("You lose")) {
            console.log(`Player chooses ${userChoice}, computer chooses ${computerChoice}. Computer wins round!`)
            computerScore += 1;
        } else if (roundResult.startsWith("It")) {
            console.log(`Player chooses ${userChoice}, computer chooses ${computerChoice}. The round is a tie!`)
            
        }

    }

    if (playerScore > computerScore) {
        console.log(`The final score is Player: ${playerScore} to Computer: ${computerScore}. Player Wins!`);
    } else if (computerScore > playerScore) {
        console.log(`The final score is Player: ${playerScore} to Computer: ${computerScore}. Computer Wins!`);
    } else {
        console.log(`The final score is Player: ${playerScore} to Computer: ${computerScore}. The game ends in a tie!`)
    }

    } else {
        console.log("Bye")
    }

}

game();