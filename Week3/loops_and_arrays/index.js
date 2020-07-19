/* 1) Loop through the following array and count how many "computers" there are. Log the final count: */

var onStock = ["Staples","Monitor","Computer","Desk","Lamp","Computer","Lamp","Staples","Computer","Computer"];
var count = 0;
var item = "Computer"
var text = "There are"
for (i = 0; i < onStock.length; i++){
  if(onStock[i] === item){
    count++
  };
};
console.log (text.concat(" ", count," ", item, " ", "on stock" ))



/* Part 3
Message should include gendered pronouns based on gender listed in object.
Log to the console a personalized message like:
Mike is not old enough to see Mad Max
or
Madeline is old enough to see Mad Max.
4) Check to see if the movie goer is a male or female for an even more personalized message.
Mike is not old enough to see Mad Max Fury Road, don't let HIM in.
or
Madeline is old enough. SHE'S good to see Mad Max Fury Road. */


var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender:"Male"
  },
  {
    name:"Madeline",
    age: 80,
    gender: "Female"
  },
  {
    name:"Cheryl",
    age: 22,
    gender: "Female"
  },
  {
    name:"Sam",
    age: 30,
    gender: "Male"
  },
  {
    name:"Suzy",
    age: 4,
    gender: "Female"
  },
]

 var personName = "Mike"
 var genderIdentityMale = "Him"
 var genderIdentityFemale = "She"
 var male = "Male"
 var female = "Female"


for (j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++){
  if (peopleWhoWantToSeeMadMaxFuryRoad[j].name === personName){
console.log(personName.concat(" ", "is not old enough to see Mad Max"))
  }
}

for (j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++){
  if (peopleWhoWantToSeeMadMaxFuryRoad[j].name === personName){
   if (peopleWhoWantToSeeMadMaxFuryRoad[j].gender === female){
     console.log(personName.concat(" ", "is old enough.", " ", genderIdentityFemale,"`s", " ", "good to see Mad Max Fury Road"  ))
     } 
     else {
       console.log(personName.concat(" ", "is not old enough to see Mad Max Fury Road, dont let", " ", genderIdentityMale, " ", "in." ))
     }
     if(peopleWhoWantToSeeMadMaxFuryRoad[j].age >= 18){
console.log(personName.concat(" ","Is"," ", peopleWhoWantToSeeMadMaxFuryRoad[j].age, " ", "and old enough to seee Mad Max Fury Road"))
     }
     else{
       console.log(personName.concat(" ","Is"," ", peopleWhoWantToSeeMadMaxFuryRoad[j].age, " ", "and is not old enough to seee Mad Max Fury Road"))
     }
  }

}

/* 2) Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18. */
var ageRange = [18,5,8,18,20,17,35]

for (h = 0; h < ageRange.length; h++){
  if(ageRange[h] >= 18){
 console.log(ageRange[h] + " "+ "Old enough")
  }
  else{
     console.log("".concat(ageRange[h]," ", "Not old enough"))    
     //console.log(ageRange[h] + " "+ "Not old enough")
  }
}

/* Part 5
Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, 
print "Odd" to the console, otherwise print "Even". */
function isEven(a){
for(a = 0; a < 101; a++){
  if([a]%2 === 0){
  console.log(a +" "+"Even")
}
else{
   console.log(a +" "+"Odd")
}
}
}
isEven()

