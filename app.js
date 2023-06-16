// STRINGS

firstVariable = "hello world";
firstVariable = 1;
let secondVariable = firstVariable;
secondVariable = "any string";

console.log(firstVariable); //1

const yourName = "Justin";
let hello = `Hello, my name is ${yourName}`
console.log(hello);

BOOLEANS

const a = 4; 
const b = 53; 
const c = 57; 
const d = 16; 
const e = 'Kevin';

console.log(a < b); 
console.log(c > d); 
console.log('Name' == 'Name');

FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false); 
console.log(false && false && false && false && false || true); 
console.log(false === false) 
console.log(e == 'Kevin'); 
console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');


//the Farm
let animal = "cow";

const moo = (a) => {
   return a.toLowerCase === "cow"? "mooooo" : "hey, that's not a cow"
} 

console.log(moo(animal));
Driver's Ed

let age = (a){
   if (a > 16);
    console.log("Here are the keys!");
    else{
      console.log("Sorry, you're too young.");
    }
}
LOOPS

The Basics

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i< 100; i++);
console.log(array);


for(i=10;i<=100;i=i+1 ) 
{
  console.log(i)
}

for (let i = 12; i <=4000; i+=3)
{
console.log(i);
}


Get Even;

{for (let i = 0; i <=100; i++)
   {
   console.log(i);
     if(i % 2 == 0){
      console.log("<-- is an even number");
    }
   }
   }

Give Me 5

{for (let i = 0; i <=100; i++)
   {
   console.log(i);
     if(i % 5 == 0){
      console.log("I found a number. High five!");
    }
    if(i % 3 == 0){
      console.log("I found a number! Three is a crowd!")
    }
   }
   }

Savings Account

var = bank_account[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i <= 9, )

ARRAYS & CONTROL FLOW

OBJECTS


##G
const maxOfThree = function(x, y, z) {
   if(x>y){
     
     if(x>z){
       return x;}
       else{
       return z;}
       }
     if(z>x){
       if 
         (y>z)
         return y;
       
       else{
        return z;
       }
     }
 }
 var bob = maxOfThree(12, 44, 400);
 console.log(bob);


//  Given the following 

array: const myArray = [5, 10, 500, 20]{myArray.push(Aegon);}



// - Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

const myArray = [5, 10, 500, 20];{
   myArray.push("Aegon", "Justin");
 console.log(myArray);
}


// - Remove the 5from the beginning of the array.

const myArray = [5, 10, 500, 20];{
   myArray.push("Aegon", "Justin");
  myArray.shift(myArray);
 console.log(myArray);
}

// - Add the string "Bob Marley"to the beginning of the array.

const myArray = [5, 10, 500, 20];{
   myArray.push("Aegon", "Justin");
  myArray.shift(myArray);
 myArray.push("Bob Marley");
 console.log(myArray);
}

// - Remove the string of your choice from the end of the array.

const myArray = [5, 10, 500, 20];{
   myArray.push("Aegon", "Bob Marley");
  myArray.shift(myArray);
 console.log(myArray);
}

// - Reverse this array using `Array.prototype.reverse()`. 

const myArray = [5, 10, 500, 20];{
   myArray.push("Aegon", "Bob Marley");
  myArray.shift(myArray);
  myArray.reverse();
 console.log(myArray);
}

// - Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?


 if (num < 5) {
   console.log("Little number");
} else if (num > 10) {
   console.log("Big number");
} else {
   console.log("monkey");
}

let longest = array.reduce( (firstEl, secondEl) => {
        //if the first el is greater than the second el return firstEl
        return firstEl.length > secondEl.length ? firstEl : secondEl;
    }
);

console.log(longest)


