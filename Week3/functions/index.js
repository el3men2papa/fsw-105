/* Part 3
Write a function that accepts one number as a parameter, and returns whether that
 number is even or odd. (Return the string "even" or "odd"); */
 var value = number(12)
 function number(value) {
   if (value%2 === 0)
     console.log("Is Even");
     
   else
   console.log("Is Odd") ;
 }
 /* Part 1
 Write a function that accepts two numbers as parameters, and returns the sum. */
  function doSum(num1,num2){
   return num1 + num2
 };
 
 var result = doSum(10,5);
 console.log(result);
 
 var valueA = 3, valueB=2;
 console.log(valueA, "+",valueB,"equals",doSum(valueA,valueB));
 
 
 /* Part 2
 Write a function that accepts three numbers as parameters, and
  returns the largest of those numbers. */
   function maxNumber(num1,num2,num3,num4,num5){
     return Math.max(num1,num2,num3,num4,num5)
   };
   
 
   
   var result =maxNumber(2,50,24,70,45)
   console.log("The Max Number Is" +" "+ result);
 
 /* Part 4
 Write a function that accepts a string as a parameter. If the length of the string is less than or equal
  to twenty characters long, return the string concatenated with itself (string + string). If the string is
   more than twenty characters long, return the first half of the string */
   var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var sln = txt.length;
   
   
   function str(i){
   if (i.length <= 20) {
     var con = txt.concat(" ", txt);
     console.log(con)
   
   
   }
   
   else{
      var cutHalf = i.slice(1, i.length/2)
    console.log(cutHalf)
   }
   }
   str(txt)
 
 
 
 
 