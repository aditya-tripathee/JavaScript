// Async Await 
// async function always returns a promise.

// await pauses the execution of its surrounding async function until the promise is settled.

//  function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         console.log("Weather data");
//         resolve(200);
//         },2000)
//     });
//  }
 
//  async function getWeatherData(){
//     await api();
//     await api();
//  }
// getWeatherData();


function getData(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(dataid);
            resolve("success");
        },2000);
    });
};

// async function getAllData(){
//     console.log("Fetching data1.....");
    
//     await getData(1);
//     console.log("Fetching data2....");
    
//     await getData(2);
//     console.log("Fetching data3...");
    
//     await getData(3);
//     console.log("Fetching data4.....");
    
//     await getData(4);
// }

// getAllData();


async function getAllData(){
    console.log("data loading1...");
    await getData(1);
    
    console.log("data loading2...");
    await getData(2);

    console.log("data loading3...");
    await getData(3);
    
    
}

getAllData();








// IIFE :-- Immediately Invoked Function Expressions
// it is a function that is called immediately as soon as it is defined.

// (async function(){
//     console.log("Fetching data1.....");
    
//     await getData(1);
//     console.log("Fetching data2....");
    
//     await getData(2);
//     console.log("Fetching data3...");
    
//     await getData(3);
//     console.log("Fetching data4.....");
    
//     await getData(4);
// })();

