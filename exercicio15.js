const prompt = require("prompt-sync")();
const raio = Number(prompt("Digite o raio da esfera: "));
const volume = (4/3) * 3.14 *raio **3;
console.log("O volume é: "+volume);