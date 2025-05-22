const prompt = require("prompt-sync")();
const numero = Number(prompt("Insira o número: "));

if (numero >0) {
    console.log("É positivo!")
} else if (numero <0) {
    console.log("É negativo!")
} else if (numero == 0) {
    console.log("É zero!")
};