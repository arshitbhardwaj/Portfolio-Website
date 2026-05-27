// ----------------------------
// Fetch First 5 Post Titles
// ----------------------------

async function loadPosts(){

    let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    let posts = await response.json();

    let firstFive = posts.slice(0, 5);

    let postList =
    document.getElementById("postList");

    postList.innerHTML = "";


    firstFive.forEach(post => {

        let li = document.createElement("li");

        li.innerHTML = post.title;

        postList.appendChild(li);

    });

}



// ----------------------------
// Simulate Download
// ----------------------------

function simulateDownload(file){

    return new Promise(resolve => {

        let time =
        Math.floor(Math.random() * 5000) + 1000;

        setTimeout(() => {

            resolve(`${file} Downloaded`);

        }, time);

    });

}



// ----------------------------
// Download Files in Sequence
// ----------------------------

async function downloadFiles(){

    console.log(
        await simulateDownload("File1")
    );

    console.log(
        await simulateDownload("File2")
    );

    console.log(
        await simulateDownload("File3")
    );

}

downloadFiles();



// ----------------------------
// Simulated Weather Fetch
// ----------------------------

async function getWeather(city){

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(
                `Weather data received for ${city}`
            );

        }, 2000);

    });

}


getWeather("Delhi")
.then(data => console.log(data));