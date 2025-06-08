// Data types in JS :--

// 1. primitive datatypes :-- fixed datatypes 

// 1. Number :-- represents a numeric value
let num = 25;
console.log(num);
 
// 2. Strings :-- it a characters which is enclosed within a single or double quotes.
let str = "adii";
console.log(str);

// 3. Boolean :-- true / false
let isFollow = true;
console.log(isFollow);
 

// 4. undefined :-- undeclared values 
let age;
console.log(age);


// 5. null :-- absence of values or empty values.
let balance = null;
console.log(balance);

// 6. bigint :-- stores large integers numbers beyond the normal integers numbers
let bignum = 95621345120n;
console.log(bignum);

// 7. symbol :-- it is used to create a unique identifers for object properties.

let sym = Symbol("id1");
console.log(sym);


// 2. Non-Primitive datatypes 
// 1. Arrays :-- it is collections of value.

let arr = [1,2,3,4,5];
console.log(arr);
console.log(typeof arr);



// 2. OBJECTS :-- 
let students = {
    name : "adii",
    age : 22,
    city : "gorakhpur"
}
console.log(typeof students);
console.log(students);

// 3. Functions :--
function fun(){
    console.log("Aditya");
    
}

fun();
console.log(typeof fun);
