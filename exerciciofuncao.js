//sintexe = escrita de código

let opcaoEscolhida = 0;

do {
    opcaoEscolhida = parseInt(prompt(`
            ===========MENU DE EXERCÍCIOS===========

            Digite um número das opções:

            0 - Sair
            1 - Login
            2 - IMC
            3 - Par ou Impar
            4 - Média do aluno
            5 - Número crescente, decrescente e aleatório

            =========================================
        `));

    switch (opcaoEscolhida) {
        case 0:
            alert("Volte sempre...");
            break;
        case 1:
            login();
            break;
        case 2:
            calculoIMC();
            break;
        case 3:
            verificarNumeroImparOuPar();
            break;
        case 4:
            calculoMediaAluno();
            break;
        case 5:
            verificarSequenciaNumeros();
            break;

        default:
            alert("Opção inválida! Escolha uma opção que exista no nosso sistema")
            break;
    }
}
while (opcaoEscolhida != 0);

function login() {
    alert("Login realizado com sucesso")
}
function calculoIMC() {
    let peso = Number.parseFloat(prompt("Informe seu peso (em kg): "))
    let altura = Number.parseFloat(prompt("Informe a sua altura (em metros: "))

    let imc = peso / (altura * altura)

    alert("Seu IMC é:" + imc)

    if (imc < 18.5) {
        alert("Abaixo do peso")
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso normal")
    }
    else if (imc >= 25 && imc <= 29.9) {
        alert("Sobrepeso")
    }
    else if (imc >= 30 && imc <= 34.9) {
        alert("Obesidade grau 1")
    }
    else if (imc >= 35 && imc <= 39.9) {
        alert("Obesidade grau 2")
    }
    else {
        alert("Obesidade grau 3")
    }
}
function verificarNumeroImparOuPar() {
    let numero = parseInt(prompt("Informe um número inteiro:"))

    if (numero % 2 == 0) {
       alert("O Número é Par")
    } else {
       alert("O Número é Impar")
    }
}
function calculoMediaAluno() {
    alert("Informe ás notas de 0 a 10")
    let nota1 = parseInt(prompt("Informe a primeira nota:"))
    let nota2 = parseInt(prompt("Informe a segunda nota:"))
    let nota3 = parseInt(prompt("Informe a terceira nota:"))
    let nota4 = parseInt(prompt("Informe a quarta nota:"))

    let media = (nota1 + nota2 + nota3 + nota4) / 4

   alert("A média do aluno é: " + media)

    if (media >= 7) {
       alert("APROVADO")
    }
    else if (media < 7 && media >= 5) {
       alert("Recuperação")
    }
    else {
       alert("Reprovado ;-;")
    }
}
function verificarSequenciaNumeros() {
    let numero01 = parseInt(prompt("Digite o primeiro número:"))
    let numero02 = parseInt(prompt("Digite o segundo número:"))
    let numero03 = parseInt(prompt("Digite o terceiro número:"))

    if (numero01 < numero02 && numero02 < numero03) {
        alert("Os números estão em ordem crescente!")
    }
    else {
        alert("Os númeos Não estão em ordem crescente!")
    }
}