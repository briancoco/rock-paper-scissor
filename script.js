function computerPlay() {
    //create var that will hold a random number from 1 - 3
    let randNum = Math.floor(Math.random() * 3 + 1)
    //create a series of conditionals that will set the selection to rock/paper/scissors depending on the #
    if(randNum === 1) {
        return 'Rock';
    }
    else if(randNum === 2) {
        return 'Paper';
    }
    else {
        return 'Scissors'
    }
    //return the selection


}

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    //if player chose rock go here
    if(playerSelection === 'rock') {
        //if computer chose scissors, return "You Win! Rock beats Scissors."
        if(computerSelection === 'Scissors') {
            return "You Win! Rock beats Scissors.";
        }
        //if computer chose paper, return "You Lose. Paper beats Rock."
        else if(computerSelection === 'Paper') {
            return "You Lose. Paper beats Rock.";
        }
        else {
            return "Tie.";
        }
    }

    //if player chose paper go here
    if(playerSelection === 'paper') {
        //if computer chose rock, return "You Win! Paper beats Rock."
        if(computerSelection === 'Rock') {
            return "You Win! Paper beats Rock.";
        }
        //if computer chose scissors, return "You Lose. Scissors beats Paper."
        else if(computerSelection === 'Scissors') {
            return "You Lose. Scissors beats Paper.";
        }
        else {
            return "Tie.";
        }
    }
        

    //if player chose scissors go here
    if(playerSelection === 'scissors') {
        //if computer chose paper, return "You Win! Scissors beats Paper."
        if(computerSelection === 'Paper') {
            return "You Win! Scissors beats Paper.";
        }
        //if computer chose rock, return "You Lose. Rock beats Scissors."
        else if(computerSelection === 'Rock') {
            return "You Lose. Rock beats Scissors.";
        }
        else {
            return "Tie.";
        }
    }
    
} 
console.log(round('rOcK', computerPlay()));