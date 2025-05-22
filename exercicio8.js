const prompt = require('prompt-sync')();

const valorA = Number(prompt('Digite o valor de A: '));
const valorB = Number(prompt('Digite o valor de B: '));
const valorC = Number(prompt('Digite o valor de C: '));

const delta = valorB ** 2 - 4 * valorA * valorC;
console.log('O valor de delta é: ' + delta);

if (delta < 0) {
    console.log('Não existem raízes reais.');
} else {
    const raizDelta = Math.sqrt(delta);
    console.log('A raiz de delta é: ' + raizDelta);

    const soma = -valorB + raizDelta;
    const subtracao = -valorB - raizDelta;
    const divisor = 2 * valorA;

    const resposta1 = soma / divisor;
    const resposta2 = subtracao / divisor;

    console.log('A primeira resposta (x1) é: ' + resposta1);
    console.log('A segunda resposta (x2) é: ' + resposta2);
}
