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

console.log(add(10,20));



// for each loops in Arrays :-- it can be only used for arrays.
// callback function :-- it is a function to execute for each element in the array.

let arr = [1,2,3,4,5,6];

arr.forEach((val)=>{
  console.log(val);
})


let city = ["delhi","mumbai","goa"];

city.forEach((val,idx,arr)=>{
  console.log(val.toUpperCase(),idx,arr);
  
})



//
let num = [1,2,3,4,5];
num.forEach((val)=>{
  console.log(val*val);
  
})


// map methods :--  creates a new array with the some results of operations.
// num.map((val)=>{
//   console.log(val);
// })

// let squareNum = num.map((val)=>{
//   return val*val;
  
// })


// console.log(squareNum);


// filter method :-- creates a new array of elements that give true for condition/filter.
// for example :-- all even number

let newArr = num.filter((val)=>{
  // return val%2==0;
  return val%2!=0;
})

console.log(newArr);


// reduce method :-- it performs some operations and reduces the array to a single value. It returns that single value.

let addResult = num.reduce((acc,curr)=>{
  return acc+curr;
})

console.log(addResult);


