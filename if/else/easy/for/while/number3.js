//Maior Número: Crie uma função que recebe um array de números e retorna o maior número.
//FUCK OFF COPILOT

function tallNumber(arr){
    let firstValue = arr[0];
    // O loop começa do índice 1, pois o índice 0 já foi usado para inicializar
    for(let i = 1; i < arr.length; i++){
       if(arr[i] > firstValue){
        firstValue = arr[i];
       }
       return firstValue;
    };
}

console.log(tallNumber([2, 8, 6]))