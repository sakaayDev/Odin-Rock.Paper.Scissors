const log = console.log;
let playerScor= 0;
let computerScor= 0;
let round = 0;



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
    if(playerScor >1){
        let pTime= "times"
    }else{pTime ="time"};
    if(computerScor >1){
        let cTime= "times"
    }else{cTime ="time"};
    round++;
    pRound =`round ${round}`;
    let player = humanChoice;
    let computer =getComputerChoice();
    if(player == computer){
        pChoicesMade.textContent =`computer chooses ${computer}, player chooses ${player}`;
        pRoundWinner.textContent =`it's a DRAW!`;

    }else if(
            player =="rock" && computer == "scissors" ||
            player =="paper" && computer == "rock"  ||
            player =="scissors" && computer == "paper"){
            playerScor++;
            pChoicesMade.textContent =`computer chooses ${computer}, player chooses ${player}`;
            pRoundWinner.textContent =`player wins this round!`;
            pRoundWon.textContent = `player wins ${playerScor} ${pTime},computer wins ${computerScor} ${cTime}`;
    }else{

        computerScor++;
        pChoicesMade.textContent =`computer chooses ${computer}, player chooses ${player}`;
        pRoundWinner.textContent = `computer wins this round!`;
        pRoundWon.textContent = `player wins ${playerScor} ${pTime},computer wins ${computerScor} ${cTime}`;
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

 let reset =document.querySelector("#reset");
 reset.addEventListener("click",()=>{
    computerScor = 0;
    playerScor = 0;
    round = 0;
    pChoicesMade.textContent =``;
    pRoundWinner.textContent =``;
    pRoundWon.textContent = ``;
 }); 

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

let pRound = document.querySelector("#round");


let pChoicesMade = document.querySelector("#choicesMade");


let pRoundWinner = document.querySelector("#roundWinner");


let pRoundWon = document.querySelector("#roundWon");
