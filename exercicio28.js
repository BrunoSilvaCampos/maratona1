const prompt = require("prompt-sync")();
const n1 = Number(prompt("Insira o primeiro número: "));
const n2 = Number(prompt("Insira o segundo número: "));
const n3 = Number(prompt("Insira o terceiro número: "));

if (n1>n2&&n1>n3) {
    console.log("Número 1 é maior!");
} else if(n2>n1&&n2>n3) {
    console.log("Número 2 é maior!")
} else {
    console.log("Número 3 é maior!")
};