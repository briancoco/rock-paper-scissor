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

function notValid(userinput) {
    userinput = userinput.toLowerCase();
    if(userinput === 'rock' || userinput === 'paper' || userinput === 'scissors') {
        return false;
    }
    else {
        return true;
    }
}

function game() {
    //var to track the # of wins
    let wins = 0;
    //var to hold user input
    let userinput;
    //var to hold result of each round
    let result;
    //var holds # of losses
    let loses = 0;
    //for loop to create a 5 round game
    for(let i = 0; i < 5; i++) {
        //gets user input
        //checks if it is not valid
        //loops through until given valid input
        //plays round
        //if result has the term 'Win', then add 1 to the wins var
        //if result has the term 'Lose', then add 1 to the loses var
        userinput = prompt('enter your move: ');
        while(notValid(userinput)){
            userinput = prompt('Invalid move! Try again: ');
        }
        result = round(userinput, computerPlay());
        if(result.search('Win') != -1) {
            wins++;
        }
        if(result.search('Lose') != -1) {
            loses++;
        }
        console.log(result);
        console.log('Win Counter: ' + wins);
        console.log('');

    }
       

    //if wins is greater than loses then player wins
    //if loses greater than wins, player loses
    //else player and computer tie
    if(wins > loses) {
        console.log('Congrats, You Won!');
    }
    else if(wins === loses) {
        console.log('You both tied!');
    }
    else {
        console.log('You lose. Better luck next time :(');
    }
}

game();