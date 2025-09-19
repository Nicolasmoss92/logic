// Preço do Cinema: Escreva uma função que recebe a idade de uma pessoa e um booleano ehEstudante.
// Se a idade for menor que 12, o preço é R$ 10,00.
// Se for um estudante, o preço é R$ 15,00.
// Caso contrário, o preço é R$ 20,00.
//FUCK OFF COPILOT

function cinemaPrice(age, student) {
    if (age <= 12) {
        return "Price is 10";
    } else if (student) {
        return "15";
    } 
    return "20";
}
