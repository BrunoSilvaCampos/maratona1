const prompt = require("prompt-sync")();

const a = Number(prompt("Digite o lado A do seu triângulo: "));
const b = Number(prompt("Digite o lado B do seu triângulo: "));
const c = Number(prompt("Digite o lado C do seu triângulo: "));

const P = a+b+c;
console.log("Seu perímetro é "+P);

const H = (a * Math.cbrt(3)) /2;
const A = (b*H) /2;
console.log("Sua área é "+A);