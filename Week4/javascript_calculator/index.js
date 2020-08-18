let readlineSync = require('readline-sync');


function option1 (){
    let num1 = readlineSync.question("Please enter your first number? ");
    let num2 = readlineSync.question("Please enter your second number? "); 
    console.log("The result is" + " " + (Number(num1) + Number(num2)));
}
function subtract(){
    let num1 = readlineSync.question("Please enter your first number? ");
    let num2 = readlineSync.question("Please enter your second number? "); 
    console.log("The result is" + " " + (Number(num1) - Number(num2)))
}
function multiply(){
    let num1 = readlineSync.question("Please enter your first number? ");
    let num2 = readlineSync.question("Please enter your second number? "); 
    console.log("The result is" + " " + (Number(num1) * Number(num2)));
}
function divide(){
    let num1 = readlineSync.question("Please enter your first number? ");
    let num2 = readlineSync.question("Please enter your second number? "); 
    console.log("The result is" + " " + (Number(num1) / Number(num2)));

    
}
function results() {
    let sum = readlineSync.question('enter the operation to perform: , sub, mul, div:')
    if (sum === 'add'){
        add() 
    }else if (sum === 'sub'){
        subtract()
    }else if (sum === 'mul'){
        multiply()
    }else if (sum === 'div'){
        divide()
    }else {
        console.log("Please try again")
    }
}
results()
