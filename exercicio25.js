const prompt = require("prompt-sync")();
const nomeCompleto = prompt("Digite seu nome completo: ");
const ultimoNome = nomeCompleto.split(" ");
console.log(ultimoNome[ultimoNome.length -1]);