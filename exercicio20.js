const prompt = require("prompt-sync")();
const palavra = prompt("Digite a palavra: ");
if (palavra === palavra.split('').reverse().join('')){ 
    console.log("É um palíndromo!");
} else {
    console.log("Não é um palíndromo!")
};