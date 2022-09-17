function computerChoice(){
    let randomNum = Math.random() * 100;
    if(randomNum < 32){
        return "rock"
    }else if(randomNum < 65){
        return "paper"
    }else{
        return "scissors"
    }
}

function promptPlayerInput(){
    let rawPlayerInput = prompt("Rock, Paper, or Scissors?")
    return rawPlayerInput.toLowerCase();
}

function game(){
    let totalRoundsPlayed = 0;
    let playerScore = 0;
    let compScore = 0;
    while (totalRoundsPlayed < 5){
        result = playRound(promptPlayerInput(), computerChoice());
        totalRoundsPlayed++;
        
        if (result == "pWin") {
            ++playerScore;
            console.log("Player Score: " + playerScore + "\tComputer Score: " + compScore);

        }else if (result == "cWin"){
            ++compScore;
            console.log("Player Score: " + playerScore + "\tComputer Score: " + compScore);
        }
    }

    finalResult(playerScore, compScore);
}

function playRound(playerSelection, cpuSelection){
    if(playerSelection == "rock"){
        if (cpuSelection == "rock") {
            return console.log("I choose ROCK!\nIt's a Draw!\nWe both chose Rock");
        }else if(cpuSelection == "paper"){
            console.log("I choose PAPER!\nYou lose the round!\nMy paper beats your rock");
            return "cWin"
        }else if(cpuSelection == "scissors"){
            console.log("I choose SCISSORS!\nYou win the round!\nYour rock beats my scissors");
            return "pWin"; 
        }
    }
    if(playerSelection == "paper"){
        if (cpuSelection == "rock") {
            console.log("I choose ROCK!\nYou win the round!\nYour paper beats my rock");
            return "pWin"
        }else if(cpuSelection == "paper"){
            return console.log("I choose PAPER!\nIt's a Draw!\nWe both chose paper");
        }else if(cpuSelection == "scissors"){
            console.log("I choose SCISSORS!\nYou lose the round!\nMy scissors beats your paper");
            return "cWin"
        }
    }

    if(playerSelection == "scissors"){
        if (cpuSelection == "rock") {
            console.log("I choose ROCK!\nYou lose the round!\nMy rock beats your scissors");
            return "cWin" 
        }else if(cpuSelection == "paper"){
            console.log("I choose PAPER!\nYou win the round!\nYou scissors beat my paper");
            return "pWin"
        }else if(cpuSelection == "scissors"){
            console.log("I choose SCISSORS!\nIt is a Draw!\nWe both chose scissors");
        }
    }
}

function finalResult(playerScore,compScore){
    if(playerScore > compScore){
        console.log(`The final result is: Player: ${playerScore} Computer: ${compScore} 
        You won a game of 5 rounds!`)
    }else if(playerScore < compScore){
        console.log(`The final result is: Player: ${playerScore} Computer: ${compScore} 
        You lost a game of 5 rounds!`)
    }else{
        console.log(`The final result is: Player: ${playerScore} Computer: ${compScore} 
        The game ended in a tie!`)
    }
}

game();