let playerScore = 0;
let aBotScore = 0;


//computer generates a random answer.
function computerPlay() { 
    let getComputerPlay = (Math.floor(Math.random() * 10)) % 3;
    if (getComputerPlay === 0){
        return "rock";
    }else if (getComputerPlay === 1){
        return " paper";
    }else if (getComputerPlay === 2){
        return "scissors";
    }
    
    

};

// a function to determine who is the winner
function playRound(player,aBot){
    if (player === "rock" && aBot === "paper"){
        return " you lose!";
    }
    else if (player === "rock" && aBot === "scissors"){
        return "you win!";
    }
    else if (player === "paper" && aBot === "scissors"){
        return "you lose!";
    }
    else if (player === "paper" && aBot === "rock"){
        return "you win!";
    }
    else {
        return "it is a tie"
    }

};


// function for Score Board (WIP)
function game(){
    
        if (player === "rock" && aBot === "paper"){
            return ++playerScore;
            return playerScore += 0;
        }
        else if (player === "rock" && aBot === "scissors"){
            return ++playerScore;
            return playerScore += 0;
        }
        else if (player === "paper" && aBot === "scissors"){
            return ++playerScore;
            return playerScore += 0;
        }
        else if (player === "paper" && aBot === "rock"){
            return ++playerScore;
            return playerScore += 0;
        }
        else {
            return (playerScore, aBotScore)
        }
       
    
    

};

const player = window.prompt("Enter rock, paper or scissors");
const aBot = computerPlay();
console.log(playRound(player, aBot));
console.log(game(player, aBot));

// playerscore-- and bot++
// playerscore++ and bot++
