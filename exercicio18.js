const prompt = require("prompt-sync")();
const frase = prompt("Escreva sua frase: ");
const novaFrase = frase.replace(/a/g,"e");
console.log(novaFrase);