const prompt = require("prompt-sync")();
const nomeCompleto = prompt("Digite seu nome completo: ");
const primeiroNome = nomeCompleto.split(" ")[0];
console.log(primeiroNome);