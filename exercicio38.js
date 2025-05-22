const prompt = require('prompt-sync')();

const anoNascimento = Number(prompt("Digite o ano de nascimento: "));
const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNascimento;

if (idade >= 16) {
    console.log("Você está apto(a) a votar.");
} else {
    console.log("Você NÃO está apto(a) a votar.");
}
