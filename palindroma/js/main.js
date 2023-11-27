const userWord = document.getElementById("userWord");
const btn = document.getElementById("btn");
const result = document.querySelector(".result");

btn.addEventListener("click",
    function(){
        const stringUser = reverseString(userWord.value);
        isPalindroma(userWord.value, stringUser);
    }
)


function reverseString(string) {
    const reverse = string.split('').reverse().join('');
    return reverse;
}

function isPalindroma(string1, string2) {
    if (string1 === string2) {
        result.innerHTML = "E' Palindroma";
    }
    else {
        result.innerHTML = "Non è Palindroma";
    }
}





