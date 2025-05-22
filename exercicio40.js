const prompt = require('prompt-sync')();

const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));
const nota3 = Number(prompt("Digite a terceira nota: "));

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Você foi aprovado!");
} else if (media < 4) {
    console.log("Você foi reprovado.");
} else {
    console.log("Você ficou de recuperação.");
}
