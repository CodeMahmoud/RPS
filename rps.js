

function computerPlay() { //computer generates a random answer.
    let getComputerPlay = (Math.floor(Math.random() * 10)) % 3;
    if (getComputerPlay === 0){
        return "rock";
    }else if (getComputerPlay === 1){
        return " paper";
    }else if (getComputerPlay === 2){
        return "scissors";
    }
    
    

};

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

const player = "rock";
const aBot = computerPlay();
console.log(playRound(player, aBot));