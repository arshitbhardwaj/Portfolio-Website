fetch("http://localhost:5000/users")
.then(res => res.json())
.then(users => {

    const table = document.getElementById("userTable");

    users.forEach(user => {

        const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
            </tr>
        `;

        table.innerHTML += row;
    });

})
.catch(err => console.log(err));