// Loops :--
// It is used to executed a piece of code again and again.

// for loop :--
// print number from 1 to 5
for(let i=1;i<=5;i++){
    console.log(i);
}

// i=0 -> initlize 
// i<=5 -> stopping condition
// i++ -> updation 

// print number 10 to 1
// for(let i=10;i>0;i--){
//     console.log(i);
    
// }

// // print hello 5 times 
// for(let i=1;i<=5;i++){
//     console.log("Hello");
    
// }

// // calculate the sum 
// let sum = 0;

// for(let i=1;i<=5;i++){
//     sum += i;
// }
// console.log(sum);

// infinte loops :--
// A loops that never ends.

// for(let i=1;i>=0;i++){
//     console.log(i);
    
// }

// while loop 
/*
  initilaization
 while(condition){
   console.log();
   i++;
 }

*/

// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
    
// }





// do while :-- at least one condition will be run 
// let i=5;
// do {
//     console.log(i);
//     i++;
    
// } while (i<=1);


// for of loops :-- it helps to itterate loops on strings and arrays 



// for in loops :-- 

let strings = "aditya";
for(let str of strings){
    console.log(str);
}

let fruits = ["guava","pineapple","apple","grapes","cherry"];
for (let fruit of fruits){
    console.log(fruit);
    
}


// for in loops :-- 
let person = {
  name: "Adii",
  age: 24,
  city: "Bhairahwa"
};

for (let key in person){
    console.log(key, person[key]);
    
}

