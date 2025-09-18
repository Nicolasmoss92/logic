// Enunciado: Escreva uma função que recebe um número. 
// Retorne "Positivo" se ele for maior que zero, "Negativo" se for menor que zero e "Zero" se for igual a zero.

function oneNumber(number) {
    let verifyValue = number;

    if (verifyValue > 0) {
        return "Positivo"
    }
    else if (verifyValue < 0) {
        return "Negativo"
    } else {
        return "Zero"
    }
}

console.log(oneNumber(-1))