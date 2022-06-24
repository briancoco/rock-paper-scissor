let winner = false;
let wins = 0;
let loses = 0;
let score = 0;
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
    winner = false;
    //if player chose rock go here
    if(playerSelection === 'rock') {
        //if computer chose scissors, return "You Win! Rock beats Scissors."
        if(computerSelection === 'Scissors') {
            winner = true;
            div.textContent = "You Win! Rock beats Scissors." ;
            
        }
        //if computer chose paper, return "You Lose. Paper beats Rock."
        else if(computerSelection === 'Paper') {
            div.textContent = "You Lose. Paper beats Rock." ;
        }
        else {
            winner = 999;
            div.textContent = "Tie." ;
            
        }
    }

    //if player chose paper go here
    if(playerSelection === 'paper') {
        //if computer chose rock, return "You Win! Paper beats Rock."
        if(computerSelection === 'Rock') {
            div.textContent = "You Win! Paper beats Rock.";
            winner = true;
        }
        //if computer chose scissors, return "You Lose. Scissors beats Paper."
        else if(computerSelection === 'Scissors') {
            div.textContent = "You Lose. Scissors beats Paper.";
        }
        else {
            div.textContent = "Tie.";
            winner = 999;
        }
    }
        

    //if player chose scissors go here
    if(playerSelection === 'scissors') {
        //if computer chose paper, return "You Win! Scissors beats Paper."
        if(computerSelection === 'Paper') {
            div.textContent = "You Win! Scissors beats Paper.";
            winner = true;
        }
        //if computer chose rock, return "You Lose. Rock beats Scissors."
        else if(computerSelection === 'Rock') {
            div.textContent = "You Lose. Rock beats Scissors.";
        }
        else {
            div.textContent = "Tie.";
            winner = 999;
        }
    }
    if(winner===true) {
        wins++;
        div2.textContent = `${wins}`;
    }
    else if(winner===false){
        loses++;
    }
    
    if(score === 5) {
        if(wins>loses) {
            div.textContent = 'You won the game!!! CONGRATS';
        }
        else if(wins<loses) {
            div.textContent = 'You lost, better luck next time :(';
        }
        else {
            div.textContent = 'you tied!!!!';
        }

        wins = 0;
        loses = 0;
        score = 0;
        div2.textContent = `${wins}`;
    }
    score++;
} 



const div = document.querySelector('.result');
const div2 = document.querySelector('.score');

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => round('rock', computerPlay()));

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => round('paper', computerPlay()));

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => round('scissors', computerPlay()));