//Soma de Números: Escreva uma função que recebe um array de números e retorna a soma de todos os seus elementos.
//FUCK OFF COPILOT

// function totalSum(arr) {
//     let soma = 0;
//     let history = [];

//     for (let i = 0; i < arr.length; i++) {
//         soma += arr[i];
//         history.push(soma);
//     };
//     return theLastElement = history[history.length -1];
// };

console.log(totalSum([1, 2, 3, 4]))


function totalSum(arr) {
    let soma = 0;

    for(let i = 0; i < arr.length; i++){
        soma += arr[i];
    }

    return soma;
}