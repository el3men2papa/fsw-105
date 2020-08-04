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
 
