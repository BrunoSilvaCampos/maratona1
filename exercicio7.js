const prompt = require("prompt-sync")();
const raio = Number(prompt("Digite o raio da circunferência: "));
const A = 3.14 *(raio**2);
console.log(A)