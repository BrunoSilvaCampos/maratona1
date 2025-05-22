const prompt = require('prompt-sync')();

const x1 = Number(prompt("Digite x1: "));
const y1 = Number(prompt("Digite y1: "));
const x2 = Number(prompt("Digite x2: "));
const y2 = Number(prompt("Digite y2: "));

const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log("Distância entre os pontos:", distancia);
