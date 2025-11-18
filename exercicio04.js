//Receber as 4 notas
alert("Informe ás notas de 0 a 10")
let nota1 = parseInt(prompt("Informe a primeira nota:"))
let nota2 = parseInt(prompt("Informe a segunda nota:"))
let nota3 = parseInt(prompt("Informe a terceira nota:"))
let nota4 = parseInt(prompt("Informe a quarta nota:"))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log("A média do aluno é: " + media) 

if(media >= 7){
    console,log("APROVADO")
}
else if (media < 7 && media >=5){
    console.log("Recuperação")
}
else{
    console.log("Reprovado ;-;")
}