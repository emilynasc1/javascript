let numero01 = parseInt(prompt("Digite o primeiro número:"))
let numero02 = parseInt(prompt("Digite o segundo número:"))
let numero03 = parseInt(prompt("Digite o terceiro número:"))

if(numero01 < numero02 && numero02 < numero03){
    console.log("Os números estão em ordem crescente!")
}
else{
    console.log("Os númeos Não estão em ordem crescente!")
}