const userNum = document.getElementById("userNum");
const userChoice = document.getElementById("userChoice");
const pcNum = randNum(1, 5);

// const userNum = parseInt(prompt("Scegli un numero"));
// const userChoice = prompt("Scegli pari o dispari");

const buttonWin = document.getElementById("btnWin");
buttonWin.addEventListener("click",
    function () {
        whoWin(parseInt(userNum.value), userChoice.value, pcNum);
        console.log("user numero: ", userNum.value);
        console.log("user choice: ", userChoice.value);
    }
)

function randNum(min, max) {
    let result = Math.floor(Math.random() * max - min) + min;
    return result;
}

function whoWin(numeroUser, sceltaUser, numeroPc) {
    let sum = numeroUser + numeroPc;
    console.log("Somma: ", sum);
    console.log("pc num: ", pcNum);
    if (sum % 2 === 1) { //se dispari
        if (sceltaUser === "dispari") {
            console.log("User vince");
        }
        else {
            console.log("Pc vince")
        }
    }
    else { //se pari
        if (sceltaUser === "pari") {
            console.log("User vince");
        }
        else {
            console.log("Pc vince")
        }
    }
}