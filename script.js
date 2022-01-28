function computerPlay() {
    //Get the computer choice

    const rndInt = Math.floor(Math.random() * 3) + 1;

    return rndInt;
    
}

function singleRound(playerSelection, computerSelection) {

    

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 1) {
                return "It\'s a tie!"
            } else if (computerSelection === 2) {
                return "You lose! Paper beats Rock"
            } else {
                return "You win! Rock beats Scissors"
            }
            break;

        case 'paper':
            if (computerSelection === 1) {
                return "You win! Paper beats Rock";
            } else if (computerSelection === 2) {
                return "It\s a tie!";
            } else {
                return "You lose! Scissors beats Paper!";
            }
            break;

        case 'scissors':
            if (computerSelection === 1) {
                return "You lose! Rock beats Scissors";
            } else if (computerSelection === 2) {
                return "You win! Scissors beats Paper";
            } else {
                return "It\s a tie!";
            }
            break;

    }   
    
}
