const prompt = require("prompt-sync")();
const tempoI = Number(prompt("Digite o tempo inicial: "));
const tempoF = Number(prompt("Digite o tempo final: "));
const espacoI = Number(prompt("Digite o lugar inicial: "));
const espacoF = Number(prompt("Digite o lugar final: "));

const deltaT = tempoF - tempoI;
const deltaE = espacoF - espacoI;
const velocidadeM = deltaT / deltaE;
console.log("Sua velocidade média é: "+velocidadeM+"KM/h");