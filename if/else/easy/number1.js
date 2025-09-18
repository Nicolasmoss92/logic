// Par ou Ímpar: 
// Crie uma função que recebe um número e retorna "Par" se ele for par ou "Ímpar" se ele for ímpar.
//FUCK OFF COPILOT

function parOrImpar(number) {
    const result = number % 2

    if (result === 0) {
        return "Par"
    } 
    return "Impar"
}

console.log(parOrImpar(7)); 