//Contar Pares e Ímpares: Crie uma função que recebe um array de números e retorna um objeto com a contagem de números pares e ímpares.
//FUCK OFF COPILOT



function someParesImpares(numbers) {
    let saveNumbersPar = [];
    let saveNumbersImpar = [];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            saveNumbersPar.push(numbers[i]);
        } if (numbers[i] % 2 === 1) {
            saveNumbersImpar.push(numbers[i])
        }
    }
    const numbersObjects = {
        "pares": saveNumbersPar.length,
        "impares": saveNumbersImpar.length
    }
    return numbersObjects;
}


console.log(someParesImpares([1, 2, 4]));