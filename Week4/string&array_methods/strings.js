/*1) Remove the last item from the vegetable array. Edit criterion description Delete criterion 
rowThis criterion is linked to a Learning OutcomeRemove the first item
 from the fruit array. */
 var fruit = ["banana", "apple", "orange", "watermelon"]
 var vegetables = ["carrot", "tomatoes", "peper", "lettuce"]
 
 //1.a)Remove last Item in Vegetables
 var test3 = vegetables.pop();
 console.log(vegetables)
 
 //1.b)Remove first item of fruit
 var test4 = fruit.shift()
 console.log(fruit)
 
 /*2) Find the index of "orange." Edit criterion description Delete criterion rowThis criterion 
  is linked to a Learning OutcomeAdd that number to the end of the fruit
   array. */
 var indexOfOrange = fruit.indexOf("orange")
 console.log("Index".concat (" ","of"," ", "orange", " ","is"," ", indexOfOrange))
 
 /*4) Put the two arrays together into one array. 
 Fruit first. Call the new Array "food" */
 var food = fruit.concat(vegetables)
 console.log(food)
 
 /* 5) Remove 2 elements from your new array starting at index 4 with
  one method. */
 var removeFood = food.splice(0,4)
 console.log(removeFood)
 
 /* 6) This criterion is linked to a Learning OutcomeReverse your array. */
 var reverseFood = removeFood.reverse()
 console.log(removeFood)

  //7) This criterion is linked to a Learning OutcomeTurn the array into a string and return it.
var turningStrings= reverseFood.toString()
console.log(turningStrings)

/* 8) Make a function that will return any given string into all caps followed by the same string all lowercase.
 */
var capitalizedAndLowerCase = "Hello"

function upper(b){
var uppeCase = b.toUpperCase()
var lowerCase = b.toLowerCase()

console.log(uppeCase.concat(lowerCase))
}
upper(capitalizedAndLowerCase)

/* 9) Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
 */
var findMiddleIndex = "Hello World";

function finals(c){
var half = Math.floor(findMiddleIndex.length/2)
console.log(half)
}

finals(findMiddleIndex)

/* 10) Make a function that uses slice() and the other functions you've written to return the first half of the string.
 */
var returnFirstHalf = "Hello World";


function halfResult(returnFirstHalf){
  var slicedInTwo = returnFirstHalf.slice(0, returnFirstHalf.length/2)
console.log(slicedInTwo)
}
halfResult(returnFirstHalf )


/* 12) Make a function that takes any string and capitalizes any character that follows a space.
 */
var capitalize = "hey friends! practice practice practice"
 
//capitalize_Words 
function capitalize_Words(str){
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words(capitalize));

/* 11) Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower 
cased. (If the string length is odd, capitalize the shorter of the first half.) */

var capitalizedAndLowerCase2 = "Hello wor";


function final(a){
  if(a.length%2===0){
var firstHalf2 = a.slice(0, a.length/2);
var firstUpper = firstHalf2.toUpperCase();
console.log(firstUpper)

  }
else {
var firstHalf = a.slice(0, a.length/2);
var sencondHalf = a.slice(a.length/2);
var firstUpper2 = firstHalf.toUpperCase();
var secondLower = sencondHalf.toLowerCase()
console.log(firstUpper2.concat(secondLower))
}
}
final(capitalizedAndLowerCase2)