//This is the original code for the project the others js files are for manipulations

  
  

let readlineSync = require('readline-sync');
let nickName = readlineSync.question("Create a user name: ");
  let age = readlineSync.question("Please enter your age: ");
let items =  ["15 health", "75 gold", "1 ring", "1 sword"];
let walk = "Keep Playing";
let optionOne = "1. Walk"
let optionTwo = "2. Run"
let optionThree = "3. Attack"
let userQuestion = "What do you want to do?"
let kuppa = "Kuppa"
let pig = "pig"
let jackle = "jackle"
let keepPlaying = "Keep Walkign"
let run = ["You have Scape keep walking", "There is no choice than to fight"]
let enemiesList = [keepPlaying, kuppa, keepPlaying, pig, keepPlaying, jackle];
let won = false;
let lost = false;
let max = 35;
let min = 15;
let attackBoss = Math.floor(Math.random() * (max - min)) + min;
let attackPlayer = Math.floor(Math.random() * (max - min)) + min;
let randomItems = Math.floor(Math.random() * items.length);
let player = 100;
let boss = 100;
let oneTime = true


console.log("Ready for your worst night mare", nickName, "?")
 while (!won && !lost ){


  let generalQuestions1 = readlineSync.question(userQuestion.concat(" ",optionOne))
 

  keepPlaying = enemiesList [Math.floor(Math.random() * enemiesList.length)] 
if(generalQuestions1 == "1" && keepPlaying != kuppa && keepPlaying != pig && keepPlaying != jackle){
  console.log(keepPlaying)
}

 else if(keepPlaying === kuppa || keepPlaying === jackle || keepPlaying === pig){
  console.log("You have found", keepPlaying )
  let generalQuestions2 = readlineSync.question(userQuestion.concat(" ", optionTwo, " ", optionThree))
  let test =  Math.floor(Math.random() * run.length)
  if (generalQuestions2 == "2"){
 
    console.log( run[test])
    } 
    if(generalQuestions2 == "3" ||  run[test] === "There is no choice than to fight"){
      console.log(keepPlaying, "VS", nickName,"Get ready to attack")
      while (boss >= 0 && player >= 0){
        let generalQuestions3 = readlineSync.question(userQuestion.concat(" ", optionThree))
        if(generalQuestions3 == "3"){
        attackBoss = Math.floor(Math.random() * (max - min)) + min;
        attackPlayer = Math.floor(Math.random() * (max - min)) + min;
        
        player= Math.floor(player - attackBoss)
        boss = Math.floor(boss - attackPlayer) 
        }

       console.log("Player attack point -",attackPlayer, "to", keepPlaying, "HP")
       console.log(keepPlaying,"HP",boss)
       console.log(keepPlaying,"attack point -",attackBoss, "to", nickName ,"HP" )
       console.log(nickName ,"HP",player)
      }
    }
} 
if (player <= 0 && boss >= 0){
  won = false
  lost = true
  console.log("You lost")
  console.log("  ..####....####...##...##..######. ")                              
  console.log(".##......##..##..###.###..##.....     ")                          
  console.log(".##.###..######..##.#.##..####...       ")                        
  console.log(".##..##..##..##..##...##..##.....         ")                      
  console.log("..####...##..##..##...##..######.           ")                    
  console.log(".................................             ")                  
  console.log("..................................####...##..##..######..#####..")
  console.log(".................................##..##..##..##..##......##..##.")
  console.log(".................................##..##..##..##..####....#####..")
  console.log(".................................##..##...####...##......##..##.")
  console.log("..................................####.....##....######..##..##.")
  console.log("...............................................................")
} 
else if (boss <= 0 && player >=0 ){
 
  
  console.log(nickName, "You Won!!!")
  console.log(nickName, "HP", player, )
  let randomItems = Math.floor(Math.random() * items.length);
 console.log ("You have collected ",items[randomItems])

                                                           
 console.log(" @@@ @@@   @@@@@@   @@@  @@@  ")                              
 console.log("@@@ @@@  @@@@@@@@  @@@  @@@     ")                           
 console.log("@@! !@@  @@!  @@@  @@!  @@@       ")                         
 console.log("!@! @!!  !@!  @!@  !@!  @!@         ")                       
 console.log(" !@!@!   @!@  !@!  @!@  !@!           ")                     
 console.log("  @!!!   !@!  !!!  !@!  !!!             ")                   
 console.log("  !!:    !!:  !!!  !!:  !!!               ")                 
 console.log("  :!:    :!:  !:!  :!:  !:!                 ")               
 console.log("   ::    ::::: ::  ::::: ::                   ")             
 console.log("   :      : :  :    : :  :                      ")           
                                                            
                                                            
console.log("         @@@  @@@  @@@   @@@@@@   @@@  @@@  @@@  @@@  @@@ ") 
console.log("          @@@  @@@  @@@  @@@@@@@@  @@@@ @@@  @@@  @@@  @@@  ")
console.log("          @@!  @@!  @@!  @@!  @@@  @@!@!@@@  @@!  @@!  @@!  ")
console.log("          !@!  !@!  !@!  !@!  @!@  !@!!@!@!  !@   !@   !@   ")
console.log("          @!!  !!@  @!@  @!@  !@!  @!@ !!@!  @!@  @!@  @!@  ")
console.log("          !@!  !!!  !@!  !@!  !!!  !@!  !!!  !!!  !!!  !!!  ")
console.log("          !!:  !!:  !!:  !!:  !!!  !!:  !!!                 ")
console.log("          :!:  :!:  :!:  :!:  !:!  :!:  !:!  :!:  :!:  :!:  ")
console.log("           :::: :: :::   ::::: ::   ::   ::   ::   ::   ::  ")
console.log("            :: :  : :     : :  :   ::    :   :::  :::  :::  ")
                                                          
   won = true
   lost= false

 }  
 else if(boss <=0 && player <=0 ){
   lost = true
   console.log(nickName,"lost", "&", keepPlaying, "lost")

console.log(" ▄▀▀█▀▄    ▄▀▀▀█▀▀▄  ▄▀▀▀▀▄      ▄▀▀█▄       ▄▀▀▀█▀▀▄  ▄▀▀█▀▄   ▄▀▀█▄▄▄▄ ")
console.log(" █   █  █  █    █  ▐ █ █   ▐     ▐ ▄▀ ▀▄     █    █  ▐ █   █  █ ▐  ▄▀   ▐ ")
console.log("  ▐   █  ▐  ▐   █        ▀▄         █▄▄▄█     ▐   █     ▐   █  ▐   █▄▄▄▄▄  ")
console.log("      █        █      ▀▄   █       ▄▀   █        █          █      █    ▌  ")
console.log("   ▄▀▀▀▀▀▄   ▄▀        █▀▀▀       █   ▄▀       ▄▀        ▄▀▀▀▀▀▄  ▄▀▄▄▄▄   ")
console.log("  █       █ █          ▐          ▐   ▐       █         █       █ █    ▐   ")
console.log("  ▐       ▐ ▐                                 ▐         ▐       ▐ ▐      ")
    }
  }
