// Arrays in JS 
// Collections of items 


// create a array
let heroes = ["spiderman","superman","hulk","shaktiman"];
console.log(heroes);
console.log(typeof heroes);

let marks = [98,56,87,26,87];
console.log(marks);


// length :-- 
console.log(heroes.length);

// Array indices :-- 
console.log(heroes[2]);  

// update the arrays value with the help of indices 

heroes[2] = "krrish";
console.log(heroes);

// Array is mutubale , it means we can change the original value 
// Strings is immutable , it means original value cannot change


// Looping over an array 

let celebrities = ["virat","srk","ms dhoni","prabhas"];

// for loop 
// for(let i=0;i<celebrities.length;i++){
//     console.log(celebrities[i]);
    
// }

// for of loops 
for(let celebrity of celebrities){
    console.log(celebrity);
    
}

let cities = ["delhi","banglore","gugaon","noida"];
 for(let city of cities){
    console.log(city);
    
 }

// Array Methods :--

// push :-- add to end

let fruits = ["guava","grapes","mango","litchi","pineapple","apple"];
console.log(fruits.push("cherry"));
console.log(fruits);

// pop :-- delete from end
console.log(fruits.pop());
console.log(fruits);

// toStrings :-- convert the array to strings 

let num = [1,2,3,4,5,6];
console.log(num.toString());
console.log(num);

// concat():-- joins multiple array 
let num1 = [1,2,3,4,5];
let num2 = [8,7,9,10,12];
console.log(num1.concat(num2));
console.log(num2.concat(num1));


// unshift():-- add to beginning
console.log(num1.unshift(100));
console.log(num1);

// shift():-- delete from beginning
console.log(num2.shift());
console.log(num2);


// slice :-- returns a piece of array 
let x = ['a','b','c','d','e'];
console.log(x.slice(1,4));
console.log(x);


// splice :-- change the original array (add,remove,replace)

let names = ["adii","aryan","alok","ankit"];

// delete only 
console.log(names.splice(1,2)); // delete index 1 , index2 delete
console.log(names);

// add only 
console.log(names.splice(1,0,"arpit","adarsh")); // add 2 elements from index 1 
console.log(names);

// not delete only add
console.log(names.splice(1,0,"abhijeet","unath","ashok"));
console.log(names);

// sort and reverse
console.log(names.sort());
// output
// [
//   'abhijeet', 'adarsh',
//   'adii',     'ankit',
//   'arpit',    'ashok',
//   'unath'
// ]


console.log(names.reverse());
// [
//   'unath',    'ashok',
//   'arpit',    'ankit',
//   'adii',     'adarsh',
//   'abhijeet'
// // ]
