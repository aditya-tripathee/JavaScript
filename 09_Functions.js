// Functions in JS 
// Block of code that perfoems a specific task, can be invoked whenever needed.

// Function Definition  
 function myName(){
    console.log("My name is Aditya");
    
 }

// -> function -> it is keyword 
//  -> myName -> function name
//  console.log() -> it is used to print or runs the block of code

//  function call 
  myName();
  myName();
  myName();
  myName();

//   Function parameters and function arguments

  function greet(name,age){  //-> name is parameters
    console.log(`My name is ${name} and age is ${age}`);
    
  }
  greet("adii",20);  //-> arguments



//   sum two numbers 
function sum(x,y){
    console.log(x+y);
    
}
sum(10,5);



// return keyword 

function sub(x,y){
    return x-y;
}

console.log(sub(10,5));


// Arrow functions :-- compact way to writing a function

const add = (x,y)=>{
    // console.log(x+y);
    return x + y;
    
}

console.log(add(10,50));

