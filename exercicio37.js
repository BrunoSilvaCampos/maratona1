const prompt = require('prompt-sync')();

const lado1 = Number(prompt("Digite o primeiro lado: "));
const lado2 = Number(prompt("Digite o segundo lado: "));
const lado3 = Number(prompt("Digite o terceiro lado: "));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    console.log("Os números podem ser os lados de um triângulo.");
} else {
    console.log("Os números NÃO podem ser os lados de um triângulo.");
}
