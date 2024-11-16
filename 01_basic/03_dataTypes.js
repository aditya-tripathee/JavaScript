// Data Types in JS
// 1. Prmitive Datatypes:-- fixed datatypes in JS 

// Number datatypes  
let num = 10;
console.log(num);
console.log(typeof num);

// String 
let myName = "Aditya";
console.log(myName);
console.log(typeof myName);

// Boolean 
let isFollow = true;
console.log(isFollow);
console.log(typeof isFollow);

// Undefined 
let age;
console.log(age);   //Undefined
console.log(typeof age); /// Undefined 

// Null 
let marks = null;
console.log(marks);  //Null
console.log(typeof marks);  // Object

// BigInt 
let bigNum = 846158465n;
console.log(bigNum);
console.log(typeof bigNum);

// Symbol 
let symbol = Symbol("51");
console.log(symbol);
console.log(typeof symbol);



// Object :--
// collections of values .

const students = {
    myName : "Adii Tripathi",
    age : 20,
    branch : "CSE"
}

console.log(students);
console.log(students.myName);
console.log(students["myName"])
console.log(students.age);


// to updated keys value 
students.age = 21;
console.log(students.age);
console.log(typeof students);  // objects 
console.log(typeof students.age); // number 
console.log(typeof students.branch); // string






