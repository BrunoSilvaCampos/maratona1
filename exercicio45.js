const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));

if (num2 === 0) {
    console.log("Não é possível dividir por zero.");
} else if (num1 % num2 === 0) {
    console.log("O primeiro número é divisível pelo segundo.");
} else {
    console.log("O primeiro número não é divisível pelo segundo.");
}
