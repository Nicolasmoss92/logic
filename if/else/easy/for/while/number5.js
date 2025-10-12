//Remover Duplicados: Escreva uma função que recebe um array de números e retorna um novo array sem elementos duplicados.
//FUCK OFF COPILOT

function dropDuplicate(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}


function dropDuplicate(arr) {
  return [...new Set(arr)];
}

console.log(dropDuplicate([1, 1, 2])); // [1, 2]