const log = console.log;
let gameOver =false;
let playerScor= 0;
let computerScor= 0;
let round = 0;
function checkGameOver(){
    if(playerScor>computerScor ){
        gameWinner.textContent="Player win,please reset if you want to play again!"
        gameOver=true;
    }else {
        gameWinner.textContent="Computer win,please reset if you want to try again!"
        gameOver=true;
    };
};

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
    if(!gameOver){
        let pTime="";
        let cTime="";
        round++;
        pRound =`round ${round}`;
        let player = humanChoice;
        let computer =getComputerChoice();
        if(player == computer){
            pChoicesMade.textContent =`computer chooses ${computer}, player chooses ${player}`;
            pRoundWinner.textContent =`it's a DRAW!`;

        }else if(
                player =="rock"     && computer == "scissors" ||
                player =="paper"    && computer == "rock"     ||
                player =="scissors" && computer == "paper"){
                playerScor++;
                if(playerScor >1){
                    pTime= "times";
                }else{pTime ="time"};
                if(computerScor >1){
                    cTime= "times";
                }else{cTime ="time"};
                pChoicesMade.textContent =`computer chooses ${computer}, player chooses ${player}`;
                pRoundWinner.textContent =`player wins this round!`;
                pRoundWon.textContent    = `player wins ${playerScor} ${pTime},computer wins ${computerScor} ${cTime}`;
        }else{

            computerScor++;
            if(playerScor >1){
                pTime= "times";
            }else{pTime ="time"};
            if(computerScor >1){
                cTime= "times";
            }else{cTime ="time"};
            pChoicesMade.textContent =`computer chooses ${computer}, player chooses ${player}`;
            pRoundWinner.textContent = `computer wins this round!`;
            pRoundWon.textContent    = `player wins ${playerScor} ${pTime},computer wins ${computerScor} ${cTime}`;
        };
        if(playerScor >4 || computerScor >4){
            checkGameOver();
        };
    };
};

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
    gameOver=false;
    pChoicesMade.textContent =``;
    pRoundWinner.textContent =``;
    pRoundWon.textContent    = ``;
    gameWinner.textContent="game ON";
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

let gameWinner = document.querySelector("#gameWinner");


