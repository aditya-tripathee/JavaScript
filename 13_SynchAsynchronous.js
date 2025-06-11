// Synchronous in JavaScript :--
// Code is executed line by line, in order.
// Each instructions wait for the previous instructions to complete its execution.

// for example :-- 
// console.log("Hello");
// console.log("Aditya");
// console.log("Adii");


// Asynchronous Javascript 
// Code doesn't wait for long running task.
// It allows other code to run while waiting.
// // for example :--
// console.log("Adii");
// function hello(){
//     console.log("Hello");
    
// }
// setTimeout(hello,2000);
// console.log("Aditya Triapthi");

// setTimeout(()=>{
//     console.log("Hello vikram aditya");
    
// },2000)


// Callback :--
// A callback is a function passed as an argument to another function.

// function sum(a,b){
//     console.log(a+b);
    
// }

// function calculator(a,b,sumCallback){
//        sumCallback(a,b);
// }

// calculator(2,4,sum);



// function greet(name,bio){
//     console.log(`Hello ${name}`);
//     bio();
    
// }

// function intro(){
//     console.log("Kiase ho aap");
    
// }

// greet("Adii",intro);

// function mybio(name,callback){
//     console.log(`Hello ${name}`);
//     callback();
// }

// function intro(name){
//       console.log(`Kaise ho aap `);
      
// } 

// // mybio("adii",intro)



// function greet(name,callback){
//     console.log(`Hello ${name}`);
//     callback();
    
// }

// function sayBye(){
//     console.log(`Goodbye bro`);
    
// }

// greet("adii",sayBye);


// Callback hell :-- Nested callbacks stacked below one another forming a pryamid structure.
// (Pyramid of Doom)
// This style of programming becomes difficult to understand and manage.


// let age  = 20;
// if(age>=18){
//     if(age>=60){
//         console.log("Senior");
        
//     }
//     else{
//         console.log("Middle");
        
//     }
// }
// else{
//     console.log("Minor");
    
// }


function getData(dataid,getnextData){
    return new Promise((resolve, reject) => {
          setTimeout(()=>{
        console.log("data = ",dataid);
        resolve("succcess");
        if(getnextData){
            getnextData();
        }
    },4000);
   })
}

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5);
//             });
//         });
//     });
// }); //2s

// trying to solve this with promise chaining

// let promise = 
// getData(100).then((res)=>{
//     console.log(res);
//     // getData(200).then(()=>{
//     //     console.log(res);
//     // })
// })

getData(20)
  .then((res)=>{
      console.log(res);
      return getData(30);
  }).then((res)=>{
    console.log(res);
    return getData(40);
  }).then((res)=>{
    console.log(res);
    return getData(50);
  }).then((res)=>{
    console.log(res);
    return getData(60);
  })
