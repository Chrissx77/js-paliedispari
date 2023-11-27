const userWord = prompt("Inserisci una parola");
let parolaInversa = reverseString(userWord);
isPalindroma(userWord, parolaInversa);


function reverseString(string) {
    const reverse = string.split('').reverse().join('');
    return reverse;
}


function isPalindroma(string1, string2) {
    if (string1 === string2) {
        console.log("E' Palindroma");
    }
    else {
        console.log("Non è Palindroma");
    }
}




