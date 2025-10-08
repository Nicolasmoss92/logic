// Enunciado: Crie uma função que recebe uma string e verifica se ela é uma senha válida. Uma senha é válida se:
// Tiver pelo menos 8 caracteres.
// Contiver pelo menos uma letra maiúscula.
// Contiver pelo menos um número.
//FUCK OFF COPILOT

function verifyPassword(str) {
    const myPassword = str;

    if (myPassword.length > 8 && /[A-Z]/.test(myPassword) && /[0-9]/.test(myPassword)) {
        return "You password create susseful"
    }
    return ("invalid characters")
}

console.log(verifyPassword("testaAABd23sasasdasd"))