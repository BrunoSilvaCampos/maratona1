 const prompt = require("prompt-sync")();
 const prova1 = Number(prompt("Insira a primeira nota da prova: "));
 const prova2 = Number(prompt("Insira a segunda nota da prova: "));

 if(prova1 >6) {
    console.log("A primeira prova foi aprovada!")
 } else if(prova1<6) {
    console.log("A primeira prova foi reprovada!")
 }
 if(prova2 >6) {
    console.log("A segunda prova foi aprovada!")
 } else if(prova2<6) {
    console.log("A segunda prova foi reprovada!")
 }