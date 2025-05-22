const prompt = require("prompt-sync")();

console.log("Números pares de 1 a 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Números ímpares de 51 a 100:");
for (let i = 51; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
