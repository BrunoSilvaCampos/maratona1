const prompt = require("prompt-sync")();

const F = prompt("Digite a força aplicada: ");
const d = prompt("Digite a distância percorrida: ");
const T = F *d;
console.log("Seu trabalho realizado pela força é: "+T);
