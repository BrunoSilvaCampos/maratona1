const prompt = require("prompt-sync")();

const palavra1 = prompt("Digite a primeira palavra: ").toLowerCase().replace(/\s/g, '');
const palavra2 = prompt("Digite a segunda palavra: ").toLowerCase().replace(/\s/g, '');

if (
    palavra1.length === palavra2.length &&
    palavra1.split('').sort().join('') === palavra2.split('').sort().join('')
) {
    console.log("São anagramas!");
} else {
    console.log("Não são anagramas.");
}
