const prompt = require("prompt-sync")();
const palavra = prompt("Digite a palavra: ");
if (palavra.toLowerCase()[0] == "a") {
    console.log("Começa com a letra A");
} else {
    console.log("Não começa com a letra A");
}