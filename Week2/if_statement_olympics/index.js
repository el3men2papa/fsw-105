
//Premelinaries

/* 1. Write an if statement that prints 
"is greater than" if 5 is greater than 3 */

if (5>3){
console.log ("is greater than")
};

/* 2. Write an if statement that prints 
"is the length" if the length of "cat" is 3 */

var str = "cat"
if (str.lenght == 3){
console.log("is the length")
}
else {
  console.log("It does not match")
};

/* 3. Write an if/else statement that checks 
if "cat" is equal to "dog" and prints, 
"not the same" when they are not equal. */

 if("cat" === "dog"){
    console.log ("They are the same animal")
}else {
    console.log ("Not the same")
};

 //Bronze Medal

/*  1.Using the below object, write an if statement that prints 
 <theNameOfThePersonInObject> is allowed to go to the movie if 
     they are old enough (18 or older), and the opposite if they
      are not older than 18. */

var person ={
    fullName: "Beatriz Martinez",
    age: 18
    };
var firstLetter = person.fullName.charAt(0)
if(person.age >= 18){
  console.log(person.fullName +" " + "is allowed to go to the movie")
};

/* 2. Using that same object, only allow them into the movie
 if their name starts with "B" */

if(firstLetter === "B") {
console.log("Can watch the movie")
};

/* 3. Using that same object, only allow them into the movie if 
their name starts with "B" and they are older than 18. */

if(firstLetter === "B" && person.age <= 18){
 console.log("Allow them to watch the movie")
};

//Silver

/* 1.Write an if/else if/else statement that prints "strict" if 1 
strictly equals "1", */
if(1==="1"){
  console.log("Strict")
}
else{
 
};

/* 2.prints "loose" or "abstract" if 1 equals "1" without type checking, and 
prints "not equal at all" if it doesn't print the other stuff. */

if(1=="1"){
  console.log("Abstract")
};

/* 3.Write an if statement that prints "yes" if 1 is less than or equal to 2 AND 
(&&) 2 is equal to 4. */
if(1<=2 && 2===4){
  console.log ("Yes")
}
else{
  console.log("No")
};

//Gold

/* 1.Write an if statement that checks to see if "dog" is a string */

var dog = "dog";
console.log("Dog is a "+""+typeof dog);

/* 2.Write an if statement that checks to see if "true" is a boolean */
var boolean = true;
console.log("True is a " +""+typeof boolean);

/* 3.Write an if statement that checks to see if a variable has been defined or not */
var x;
var y = 10;

if(typeof x !== 'undefined'){
   
   console.log("Variable x is defined.");
}
else{
  console.log("Variable x is not defined.");
};

if(typeof y !== 'undefined'){

    console.log("Variable y is defined.");
};

/* 4. Write an if statement asking if "s" greater than 12? */

if ("s" >= 12){

};

/*   Try it with a few more letters and a few numbers. */

if ("a" >= 1){
  
};
if ("v" >= 41){
  
};
if ("o" >= 9){
  
};
if ("d" >= 7){
  
};


/* Write a ternary statement that console.logs whether a number is odd or even.
(It should continue to work correctly even if myNum changes to a different number). */
var userInput = Number(11);

var msg = userInput % 2 === 0 ? "number is even" : "number is odd";

console.log (msg)


