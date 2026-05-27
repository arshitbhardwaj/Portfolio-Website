// Random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
function checkGuess(){
    let userGuess =
    Number(document.getElementById("guess").value);
    if(userGuess === randomNumber){
        document.getElementById("result").innerHTML =
        "You Win!";
    }
    else if(userGuess > randomNumber){
        document.getElementById("result").innerHTML =
        "Too High!";
    }
    else{
        document.getElementById("result").innerHTML =
        "Too Low!";
    }
}