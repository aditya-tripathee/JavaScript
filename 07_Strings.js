// Strings in JS 
// It is sequence of characters which is enclosed in double or single quotes.

// create a strings
// let str = "aditya";
// console.log(str);

// str.length:-- print the length of strings
// console.log(str.length);

// strings indices 
// console.log(str[1]);

// Template literals :--
// A way to embedded expressions in strings
let x = `This is a strings`;
console.log(x);

// Template interpolation
// To create a strings by doing substitutions of placeholders.

let obj = {
    item : "Laptop",
    price : 55000,
};

console.log(`The cost of ${obj.item} is Rs.${obj.price}`);

// escape characters :-- gives next line
console.log("Aditya\nTripathi");

// tab space
console.log("ADITYA\tTRIPATHI".length);


// Strings Methods 

let str = "Aditya";
// str.toUpperCase();
console.log(str.toUpperCase());

// str.toLowerCase():
console.log(str.toLowerCase());
console.log(str.toLocaleLowerCase());

// str.trim():--- removes whitespaces 
let z = "       adityya                      ";
console.log(z.trim());


// str.concat() :--
let str1 = "aditya";
let str2 = " tripathi";
let result = str1.concat(str2);
console.log(result);


// str.charAt():-- specified position par character ko return karta.
console.log(str1.charAt(1));


// str.slice():-- returns a part of string

console.log(str1.slice(1,5));  
// from index1 to index4 , returns the characters 

// str.replace(): replace with new value
console.log(str1.replace("i","ee"));


// indexOf():--
console.log(str1.indexOf("a"));

// includes() :-- is exists in that array or not 
console.log(str1.includes("ee"));

