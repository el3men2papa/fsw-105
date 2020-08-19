let readlineSync = require('readline-sync');



let escaped = false;
let alive = true;
let key = false;
let optionOne = '1. Put hand in hole'
let optionTwo = '2. Find the key'
let optionThree = '3. Open the Door'
let userQuestion = "What do you want to do?"



while (!escaped && alive)
{
    let generalQuestions = readlineSync.question(userQuestion.concat(" ",optionOne," ", optionTwo, " ", optionThree))

if (generalQuestions == "1") {
    escaped = false
    key = false
    console.log ("You are dead, Try it again")
    }



 else if (generalQuestions == "2") {
      key = true
      console.log("Great you have found the key")
    
  
  } 

  else if (generalQuestions == "3") {

    if (key === true){
        console.log("You have open the door")
        escaped = true
    }
    else if (key === false){

        console.log("You have to have a key to be able to open the door")
    }

} 
}
