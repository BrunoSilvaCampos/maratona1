const prompt = require('prompt-sync')();

const idade = Number(prompt("Digite sua idade: "));

if (idade < 16) {
    console.log("Você NÃO está apto(a) a votar.");
} else if ((idade >= 16 && idade <= 17) || idade >= 70) {
    console.log("Você está apto(a) a votar, mas não é obrigado(a).");
} else if (idade >= 18 && idade <= 69) {
    console.log("Você está OBRIGADO(a) a votar.");
}
