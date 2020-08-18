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

    while(boss !== 0){
        let generalQuestions = readlineSync.question(userQuestion.concat(optionThree))
        let boss = Math.floor(enemyOne - attackPlayer) 

           // else if(generalQuestions == "3" ) {

            //}
       
    
        }

        /* function charge(){
  console.log("Random Boss Attack #", attackBoss)
  //console.log("Random Player Attack #", attackPlayer)
  console.log("Boss Attack deducted",boss)
  //console.log("Player Attack deducted",player)
}
charge() */
        
