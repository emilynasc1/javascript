let login = prompt("Digite seu usuário:")

let senha = prompt("Digite a senha:")

if(login == "admin" && senha == "senha123"){
    console.log("Login bem sucedido!")
}
else{
    console.log("Você não tem permissão de acesso!")
}