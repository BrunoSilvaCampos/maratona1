const prompt = require("prompt-sync")();
const massa = prompt("Digite a massa: ");
const velocidade = prompt("Digite a velocidade: ");

const E = (massa*velocidade**2);
console.log("Sua energia cinética é: "+E);
