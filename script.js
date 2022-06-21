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
            return "Tie."
        }
    }

    //if player chose paper go here
        //if computer chose rock, return "You Win! Paper beats Rock."
        //if computer chose scissors, return "You Lose. Scissors beats Paper."

    //if player chose scissors go here
      //if computer chose paper, return "You Win! Scissors beats Paper."
        //if computer chose rock, return "You Lose. Rock beats Scissors."
} 
console.log(computerPlay());