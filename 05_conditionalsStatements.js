// Conditionals Statements 
// To implements some condition in the code.

// if statements:--

let age = 71;

if(age>=18){
    console.log("Eligible for voting rights");
}

let mode = "dark";
let color;
if(mode=="dark"){
    color = "black";
}

if(mode=="light"){
    color= "white";
}

console.log(color);

// if else statements 

if(age>=18){
    console.log("Eligible for driving license");
    
}
else{
    console.log("Not eligible");
    
}


let num = 10;
if(num%2==0){
    console.log("Even number");
    
}
else {
    console.log("Odd Number");
    
}

// else if statements
let marks = 75;
if(marks>80){
    console.log("Grade A");
}
else if(marks>60){
    console.log("Grade B");
    
}
else if(marks>40){
    console.log("Grade C");
    
}
else {
    console.log("Grade D");
    
}

// Ternary operators:--

let result = age>18 ? "Adult" : "Minor";
console.log(result);

