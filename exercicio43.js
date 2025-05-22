const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número inteiro: "));

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("É divisível por 3 e por 5 ao mesmo tempo.");
} else {
    console.log("Não é divisível por 3 e por 5 ao mesmo tempo.");
}
