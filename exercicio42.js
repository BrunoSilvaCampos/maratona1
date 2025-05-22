const prompt = require('prompt-sync')();

const peso = Number(prompt("Digite seu peso (em kg): "));
const altura = Number(prompt("Digite sua altura (em metros): "));

const imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else if (imc < 40) {
    console.log("Obesidade");
} else {
    console.log("Obesidade grave");
}
