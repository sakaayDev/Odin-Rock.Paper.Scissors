const log = console.log;




function getComputerChoice(){
   let choice = Math.floor(Math.random()*3);
    switch(choice) {
        case 0: 
            choice ="rock";
            break;
        case 1:
            choice ="paper";
            break;
        case 2:
            choice ="scissors";
            break;
    }return choice;
};

function singleRound(humanChoice){
    let playerScor=0;
    let computerScor=0;
    let round = 0;
    round++;
    log("Round"+round);
    let player = humanChoice;
    let computer =getComputerChoice();
    if(player == computer){
        log("computer chooses "+ computer+", you choose "+ player)
        log("Draw");
        log("");
    }else if(player =="rock" && computer == "scissors" ||
            player =="paper" && computer == "rock"  ||
            player =="scissors" && computer == "paper"){
            playerScor++;
            log("computer chooses "+ computer+", you choose "+ player)
            log("you win");
            log("round won by player = "+ playerScor)
            log("");
    }else{
        computerScor++;
        log("computer chooses "+ computer+", you choose "+ player)
        log("computer wins");
        log("rounds won by computer = "+ computerScor)
        log("");
    }
    }

/*function rpsGame(){
round++;
log("Round"+round);
let player = getPlayerChoice();
let computer =getComputerChoice();
if(player == computer){
    log("computer chooses "+ computer+", you choose "+ player)
    log("Draw");
    log("");
}else if(player =="rock" && computer == "scissors" ||
        player =="paper" && computer == "rock"  ||
        player =="scissors" && computer == "paper"){
        playerScor++;
        log("computer chooses "+ computer+", you choose "+ player)
        log("you win");
        log("round won by player = "+ playerScor)
        log("");
}else{
    computerScor++;
    log("computer chooses "+ computer+", you choose "+ player)
    log("computer wins");
    log("rounds won by computer = "+ computerScor)
    log("");
}
};
if(playerScor> computerScor){
    return ("player wins "+ playerScor+" to " + computerScor);
}else{
    return ("Computer wins "+ computerScor+" to " + playerScor);
} */

/* let playGame =document.querySelector("#rps");
 playGame.addEventListener("click",rpsGame); */

const btnRock =document.querySelector("#rock");
btnRock.addEventListener("click",function(){
    let choice="rock";
    singleRound(choice)
});

const btnPaper =document.querySelector("#paper");
btnPaper.addEventListener("click",function(){
    let choice="paper";
    singleRound(choice)
});

const btnScissors =document.querySelector("#scissors");
btnScissors.addEventListener("click",function(){
    let choice="scissors";
    singleRound(choice)
});
