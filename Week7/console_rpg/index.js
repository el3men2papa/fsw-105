//This is the original code for the project the others js files are for manipulations

let readlineSync = require('readline-sync');
let items =  ["15 health", "75 gold", "1 ring", "1 sword"];;
let walk = "Keep Playing";
let optionOne = "1. Walk"
let optionTwo = "2. Run"
let optionThree = "3. Attack"
let userQuestion = "What do you want to do?"
let kuppa = "Kuppa"
let keepPlaying = "Keep Walkign"
let run = ["You have Scape keep walking", "There is no choice than to fight"]
let enemiesList = [keepPlaying, kuppa, keepPlaying];
let won = false;
let lost = false;
let max = 35;
let min = 15;
let attackBoss = Math.floor(Math.random() * (max - min)) + min;
let attackPlayer = Math.floor(Math.random() * (max - min)) + min;
let randomItems = Math.floor(Math.random() * items.length);
let player = 100;
let boss = 100;

 while (!won && !lost ){
  let generalQuestions1 = readlineSync.question(userQuestion.concat(" ",optionOne))
  

  keepPlaying = enemiesList [Math.floor(Math.random() * enemiesList.length)] 
if(generalQuestions1 == "1" && keepPlaying != kuppa){
  console.log(keepPlaying)
}

 else if(keepPlaying === kuppa){
  console.log("You have found an enemy")
  let generalQuestions2 = readlineSync.question(userQuestion.concat(" ", optionTwo, " ", optionThree))
  let test =  Math.floor(Math.random() * run.length)
  if (generalQuestions2 == "2"){
 
    console.log( run[test])
    } 
    if(generalQuestions2 == "3" ||  run[test] === "There is no choice than to fight"){
      console.log("Get ready to attack")
      while (boss >= 0 && player >= 0){
        let generalQuestions3 = readlineSync.question(userQuestion.concat(" ", optionThree))
        if(generalQuestions3 == "3"){
        attackBoss = Math.floor(Math.random() * (max - min)) + min;
        attackPlayer = Math.floor(Math.random() * (max - min)) + min;
        
        player= Math.floor(player - attackBoss)
        boss = Math.floor(boss - attackPlayer) 
        }

       console.log("Player attack point -",attackPlayer, "to Boss HP")
       console.log("Boss HP",boss)
       console.log("Boss attack point -",attackBoss, "to player HP" )
       console.log("Player HP",player)
      }
    }
} 
if (player <= 0 && boss >= 0){
  won = false
  lost = true
  console.log("You lost")
} 
else if (boss <= 0 && player >=0 ){
 let randomItems = Math.floor(Math.random() * items.length);
 console.log ("You have collected ",items[randomItems])
  
  console.log("You Won!!!")
   won = true
   lost= false

 }  
 else if(boss <=0 && player <=0 ){
   lost = true
   console.log("Its a tie")
 }
  }