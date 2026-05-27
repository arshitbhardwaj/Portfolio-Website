// Async/Await Version
async function loadUsers(){

    let response =
    await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    let users = await response.json();


    let userList =
    document.getElementById("userList");

    userList.innerHTML = "";


    users.forEach(user => {

        let li = document.createElement("li");

        li.innerHTML =
        `${user.name} - ${user.email}`;

        userList.appendChild(li);

    });

}