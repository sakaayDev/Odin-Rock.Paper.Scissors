const log = console.log
log("finally really");
log("Hello ME and You!")
let player =getPlayerchoice();
function getPlayerchoice(){
    let playerChoice;
    while (playerChoice != "Rock" && playerChoice !="Paper" && playerChoice !="Scissors" ){
        playerChoice = prompt(`choose between Rock,Paper,Scissors: `,"");
        // i spent like an hour trying || and not understanding why it was a infinite loop XD
    }
    return playerChoice
}
log(player);
let computer = getComputerChoice();
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
log(computer);
log(Math.random());
let test =[1,2,3];
// i want a function that choose 1 of the 3 hmmm
// log(test.random()); nice try dumbas lol
