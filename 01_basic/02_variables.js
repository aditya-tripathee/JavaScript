// Const :-- A variable cannot be re-declared or cannot be updated. A block scope variable.
// for exam:--

const accountId = 144455;
// accountId = 2565;
console.log(accountId); // it cannot be print the output because of redeclared variables .


// Let :-- A variables cannot be re-declared but can be updated. A block scope variable.
// for example:-
let myName = "Adii";
myName = "Aditya";
console.log(myName);


// Var :-- A variable can be redeclared or updated. A gloabl scope variable.
// for exam:--
var age = 10;
age = 20;
console.log(age);

/*
Prefer to not use var 
because of issue in block
*/ 