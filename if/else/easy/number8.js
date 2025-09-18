// Classificação de Idade: Escreva uma função que recebe uma idade e retorna:
// "Criança" (0-12 anos)
// "Adolescente" (13-17 anos)
// "Adulto" (18-64 anos)
// "Idoso" (65 anos ou mais)
//FUCK OFF COPILOT

function verifyAge(age) {
    if (age <= 12) {
        return "Criança"
    } else if (age >= 13 && age <= 17) {
        return "Adolescente"
    } else if (age >= 18 && age <= 64) {
        return "Adulto"
    } return "Idoso"
}

console.log(verifyAge(55))