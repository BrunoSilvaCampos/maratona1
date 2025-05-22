const prompt = require('prompt-sync')();

const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
const num3 = Number(prompt("Digite o terceiro número: "));
const soma = num1 + num2 + num3;

if (soma % 5 === 0) {
    console.log("A soma é divisível por 5");
} else {
    console.log("A soma não é divisível por 5");
}
