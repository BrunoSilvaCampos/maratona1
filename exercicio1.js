const prompt = require("prompt-sync")();
const valor1 = Number(prompt("Digite o primeiro valor: "));
const valor2 = Number(prompt("Digite o segundo valor: "));
console.log("Soma: "+ (valor1+valor2));
console.log("Subtração: "+ (valor1-valor2));
console.log("Divisão: "+ (valor1/valor2));
console.log("Multiplicação: "+ (valor1*valor2));
