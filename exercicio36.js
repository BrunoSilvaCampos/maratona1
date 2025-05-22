const prompt = require('prompt-sync')();

const idade1 = Number(prompt("Digite a idade da primeira pessoa: "));
const idade2 = Number(prompt("Digite a idade da segunda pessoa: "));
const idade3 = Number(prompt("Digite a idade da terceira pessoa: "));

if (idade1 >= 18 && idade2 >= 18 && idade3 >= 18) {
    console.log("Todas as pessoas são maiores de idade.");
} else if (idade1 < 18 && idade2 < 18 && idade3 < 18) {
    console.log("Todas as pessoas são menores de idade.");
} else {
    console.log("Alguma(s) pessoa(s) é(são) maior(es) de idade.");
}
