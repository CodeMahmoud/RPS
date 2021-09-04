function computerPlay() { //computer generates a random answer.
    let getComputerPlay = (Math.floor(Math.random() * 10)) % 3;
    if (getComputerPlay === 0){
        return "Rock";
    }else if (getComputerPlay === 1){
        return " Paper";
    }else if (getComputerPlay === 2){
        return "Scissors";
    }
    
    

};

