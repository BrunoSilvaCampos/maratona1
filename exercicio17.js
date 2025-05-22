const prompt = require("prompt-sync")();
let palavra = prompt("Digite a palavra: ")
for(i=0;i<palavra.length;i++) {
    console.log(palavra[i])
}
