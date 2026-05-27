console.log("One");


setTimeout(() => {

    console.log("Two");

}, 1000);


setTimeout(() => {

    console.log("Three");

}, 2000);

// Callback Function
function finished(){

    console.log("Callback Function Called");

}


// Main Function
function doHomework(subject, callback){

    console.log(`Homework done for ${subject}`);

    callback();

}


// Function Call
doHomework("JavaScript", finished);

// Create Promise
let downloadPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve("Download Complete");

    }, 3000);

});


// Use Promise
downloadPromise.then((message) => {

    console.log(message);

});

// Async Function
async function fetchUser(){

    await new Promise(resolve =>

        setTimeout(resolve, 2000)

    );

    console.log("User data received");

}


// Function Call
fetchUser();