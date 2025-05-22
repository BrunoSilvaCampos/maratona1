const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número para ver a tabuada: "));

console.log("Tabuada de " + numero + ":");
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
