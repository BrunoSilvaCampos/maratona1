const prompt = require('prompt-sync')();

const mediaAluno1 = Number(prompt("Digite a primeira nota do aluno: "));
const mediaAluno2 = Number(prompt("Digite a segunda nota do aluno: "));
const media =  (mediaAluno1 + mediaAluno2)/2;

console.log(media)
