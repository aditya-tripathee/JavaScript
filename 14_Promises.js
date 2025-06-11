// Promises in JS 
// It is for "eventual" completion of task. It is an in JS.
// It is a solution to callback hell.


// let promise = new Promise((resolve,reject)=>{})


    // let promise = new Promise((resolve, reject) => {
    //     console.log("I am promise");
    //     // resolve("success");
    //     reject("error occurred");
        
    // })


    // function getData(dataid,getnextData){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(()=>{
    //             console.log("data = ",dataid);
    //             resolve("success");
    //             if(getnextData){
    //                 getnextData();
    //             }
                
    //         },5000);
    //     });
    // };

    // let result = getData(500);
    // console.log(result);
    

    // .then() and .catch():--



// const getPromise = ()=>{
//    return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("success");
//         reject("error")
        
//     })
// }

// let promise = getPromise();
// promise.then(()=>{
//     console.log("Promise is fulfilled");
    
// });

// promise.catch((error)=>{
//     console.log(error);
    
// })



// promise chianing 

function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some data1");
            resolve("success");
        },3000);
    });
};

function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("some data2");
            resolve("success");
        },4000);
    });
};




console.log("Fetching data...");

// let promise = asyncFunc();
// promise.then((res)=>{
//     console.log(res);
//     console.log("Fetching data2.....");
//     let promise2 = asyncFunc2();
//     promise2.then((res)=>{
//     console.log(res);
    
// })

    
// })

asyncFunc().then((res)=>{
    console.log(res);
    asyncFunc2().then((res)=>{
        console.log(res);
    });
});





