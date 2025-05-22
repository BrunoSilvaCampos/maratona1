const prompt = require('prompt-sync')();

const largura = Number(prompt("Digite sua largura: "));
const comprimento = Number(prompt("Digite seu comprimento: "));
const P = largura*2 + comprimento*2;
const A = largura * comprimento;
console.log(`Seu perímetro é ${P} \nSua área é ${A}`)
