const userNum = document.getElementById("userNum");
const userChoice = document.getElementById("userChoice");
let pcNum;
const result = document.getElementById("result");

const buttonWin = document.getElementById("btnWin");
buttonWin.addEventListener("click",
    function () {
        console.log("user numero: ", userNum.value);
        console.log("user choice: ", userChoice.value);
        pcNum = randNum(1, 5);
        whoWin(parseInt(userNum.value), userChoice.value, pcNum);
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
            result.innerHTML = "User vince";
        }
        else {
            result.innerHTML = "Pc vince";
        }
    }
    else { //se pari
        if (sceltaUser === "pari") {
            result.innerHTML = "User vince";
        }
        else {
            result.innerHTML = "Pc vince";
        }
    }
}