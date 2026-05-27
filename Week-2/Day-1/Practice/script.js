function changeStyle(){
    document.getElementById("para").style.color = "blue";
    document.getElementById("para").style.fontSize = "30px";
}

function changeBackground(){
    document.body.style.backgroundColor = "lightblue";
}

function showText(){
    let text =
    document.getElementById("inputBox").value;
    document.getElementById("output").innerHTML =
    text;
}

function addItem(){
    let li = document.createElement("li");
    li.innerHTML = "New Item";
    document.getElementById("myList").appendChild(li);
}