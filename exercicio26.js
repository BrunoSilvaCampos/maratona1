const prompt = require("prompt-sync")();
const idade = Number(prompt("Insira sua idade: "));

if (idade >=18) {
    console.log("É maior de idade!");
} else {
    console.log("É menor de idade!")
};