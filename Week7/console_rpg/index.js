//This is the original code for the project the others js files are for manipulations


let readlineSync = require('readline-sync');
let items = ["health", "gold", "ring", "sword"];
let walk = "Keep Playing";
let optionOne = "1. Walk"
let optionTwo = "2. Run"
let optionThree = "3. Attack"
let userQuestion = "What do you want to do?"
let choice = ["Walk", "Run", "Attack"];
let kuppa = "Kuppa"
let keepPlaying = "Keep Walkign"
let run = ["You have Scape keep walking", "There is no choice than to fight"]
let enemiesList = [keepPlaying, kuppa, keepPlaying];
let won = false;
let lost = false;
let max = 35;
let min = 15;
let scape = true
let attackBoss = Math.floor(Math.random() * (max - min)) + min;
let attackPlayer = Math.floor(Math.random() * (max - min)) + min;
let randomItems = Math.floor(Math.random() * items.length);
let randomEnemyList = Math.floor(Math.random() * 5);
let firstPlayer = 100;
let enemyOne = 100;
let enemyTwo = 75;
let test =  Math.floor(Math.random() * run.length)
let player= Math.floor(firstPlayer - attackBoss)
let boss = Math.floor(enemyOne - attackPlayer) 

//trying to get the loo stop when the loop until user or boss win meaning get to zero
 while (!won || !lost ){
 //Generate the question
  let generalQuestions1 = readlineSync.question(userQuestion.concat(" ",optionOne," ", optionTwo, " ", optionThree))
  
  //random walking or a boss
  keepPlaying = enemiesList [Math.floor(Math.random() * enemiesList.length)] 
if(generalQuestions1 == "1" && keepPlaying != kuppa){
  console.log(keepPlaying)
}


/*  else if(keepPlaying = kuppa){
  console.log("You have found an enemy")
  //after found an ennemy will ask question below but after user input 2 not registering to be able to generate else if (generalQuestions2 == "2") make sure to change generalQuestions1 to generalQuestions2 before you run this code
  let generalQuestions2 = readlineSync.question(userQuestion.concat(" ", optionTwo, " ", optionThree))
}    */ 

//when choose 2 scape or cant scape, After you have scaped it keeps populating the same answer they will always scape like there is no break point
else if (generalQuestions1 == "2"){
  console.log( test, run[test])
  console.log(test)
  } 

  //when choose 3 will deduct random attack (is not working is not holding total to be able to attack again)
 else if(generalQuestions1 == "3" ) {
       console.log("Random Boss Attack #", attackBoss)
      console.log("Random Player Attack #", attackPlayer)
      console.log("Boss Attack deducted",boss)
      console.log("Player Attack deducted",player)
     }
    //when the attck are done and the boss reach out to 0 then message says win and populate a random Items
     else if (boss === 0){
       win = true
       lost= false
       console.log ("You have collected ",items,[randomItems])
       console.log("You Won!!!")
     }

   //when the attck are done and the player reach out to 0 then message says lost
     else if (player === 0){
      win = false
      lost = true
      console.log("You lost")
    }
}


