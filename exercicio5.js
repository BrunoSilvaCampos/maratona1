const prompt = require("prompt-sync")();
const peso = Number(prompt("Digite seu peso: "));
const altura = Number(prompt("Digite sua altura: "));
const imc = peso /(altura**2);
console.log(imc)