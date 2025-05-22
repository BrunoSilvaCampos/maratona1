const prompt = require("prompt-sync")();
const texto = prompt("Digite um texto: ");

const vogais = texto.match(/[aeiou]/g);
let quantidade;

if (vogais !== null) {
    quantidade = vogais.length;
} else {
    quantidade = 0;
}

console.log("Quantidade de vogais: ", quantidade);