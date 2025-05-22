const prompt = require('prompt-sync')();

const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
const num3 = Number(prompt("Digite o terceiro número: "));

const maior = Math.max(num1, num2, num3);
const menor = Math.min(num1, num2, num3);

console.log("O maior número é: " + maior);
console.log("O menor número é: " + menor);
