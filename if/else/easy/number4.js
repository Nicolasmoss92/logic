// Acesso Permitido: Escreva uma função que recebe um nome de usuário e uma senha. Retorne "Acesso Concedido" se o nome for "admin" e a senha for "12345". 
// Caso contrário, retorne "Acesso Negado".
//FUCK OFF COPILOT

function verificarAcesso(nomeUsuario, senha) {
    if (nomeUsuario === "admin" && senha === "12345") {
        return "Acesso Concedido";
    }
    return "Acesso Negado";
}

console.log(verificarAcesso('admin','12345'))