const prompt = require("prompt-sync")();
const dia = prompt("Digite o dia da semana: ").toLowerCase();

if (dia == "segunda" || dia == "terça" || dia == "quarta" || dia == "quinta" || dia == "sexta") {
    console.log("É dia útil!");
} else if (dia == "sabado" || dia == "domingo") {
    console.log("É final de semana!");
} else {
    console.log("Dia inválido!");
}
