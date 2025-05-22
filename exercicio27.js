const prompt = require("prompt-sync")();
const numero1 = Number(prompt("Insira o primeiro número: "));
const numero2 = Number(prompt("Insira o segundo número: "));

if (numero1 > numero2) {
    console.log("O primeiro número é maior!")   
} else if(numero2> numero1) {
    console.log("O segundo número é maior!")
}