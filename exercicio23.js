const prompt = require("prompt-sync")();
const texto = prompt("Digite um texto: ");

const espacos = texto.match(/ /g);
let quantidade;

if (espacos !== null) {
    quantidade = espacos.length;
} else {
    quantidade = 0;
}

console.log("Quantidade de espaços em branco:", quantidade);