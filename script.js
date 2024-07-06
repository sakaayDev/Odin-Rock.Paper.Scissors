const log = console.log
log("finally really");
log("Hello ME and You!")
let player;
let computer;
function getPlayerchoice(){
    let playerChoice;
    while (playerChoice != "Rock" && playerChoice !="Paper" && playerChoice !="Scissors" ){
        playerChoice = prompt(`choose between Rock,Paper,Scissors: `,"");
        // i spent like an hour trying || and not understanding why it was a infinite loop XD
    }
    return playerChoice
}
// log(player);
// i did if statement first but found it too big and remember that switch exist 
function getComputerChoice(){
   let choice = Math.floor(Math.random()*3);
    switch(choice) {
        case 0: 
            choice ="Rock";
            break;
        case 1:
            choice ="Paper";
            break;
        case 2:
            choice ="Scissors";
            break;
    }return choice;
};
// i'm not really sure if this is correct i know there could be a way 
// to do computer=[] and choose something from it
// log(computer);
function RpsGame(player,computer){
    let round = 0;
    let playercount=0;
    let computercount=0;
    while (playercount <3 && computercount <3){
        round++;
        log("Round"+round);
        let player = getPlayerchoice();
        let computer =getComputerChoice();
        if(player == computer){
            log("computer chooses "+ computer+", you choose "+ player)
            log("Draw");
        }else if(player =="Rock" && computer == "Scissors" ||
                player =="Paper" && computer == "Rock"  ||
                player =="Scissors" && computer == "Paper"){
                playercount++;
                log("computer chooses "+ computer+", you choose "+ player)
                log("you win");
                log("round won by player = "+ playercount)
        }else{
            computercount++;
            log("computer chooses "+ computer+", you choose "+ player)
            log("computer wins");
            log("rounds won by computer = "+ computercount)
        }
    }
    if(playercount> computercount){
        return ("player wins "+ playercount+" to " + computercount);
    }else{
        return ("Computer wins "+ computercount+" to " + playercount);
    }
}
log(RpsGame(player,computer));