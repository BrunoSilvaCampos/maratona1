const prompt = require('prompt-sync')();

const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));
const media = (nota1 + nota2) / 2;

if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
