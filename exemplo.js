//For - loop contato

//Contador do 0 ao 10
//for(inicializador; condicação; contador)

//for(let num = 0; num <= 10; num++){
// console.log("Eu vim Barganhar " + num)
//}

//while - loop condicional
// let salario = 1000

// while(salario < 5000){
//     //salario = 100 + salario
//     salario += 100

//     console.log("0 salário é de R$: " + salario)
// }

// //Do While - loop condicional
// let aumento = 1000

// do{

//     console.log("Esse é o seu saldo: " + aumento)
//     aumento += 100
//     //aumento = 100 + aumento

// }while (aumento < 5000)


//Arry
let fruta = ["Banana", "Laranja", "Maça", "Pitaya", "Melancia", "Uva"]

// console.log(fruta [3])
// console.log(fruta[5])

//forEach => percorre uma lista
frutas.forEach(morango => {
    console.log("A fruta é: " + morango)
})

//Percorrer uma lista
for (let indice = 0; indice < frutas.length; indice++){
    console.log(frutas[indice])

    if(frutas[indice] == "Uva"){
        console.log("Eu gosto de " + frutas[indice])
    }
}