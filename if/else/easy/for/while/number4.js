//Contar Vogais: Crie uma função que recebe uma string e retorna o número de vogais (a, e, i, o, u) que ela contém.
//FUCK OFF COPILOT

function getVogal(str) {
    const dict = ['a', 'e', 'i', 'o', 'u']
    let arrayString = str.split("");
    const vogal = [];

    for (let i = 0; i < arrayString.length; i++) {
        if (dict.includes(arrayString[i])) {
            vogal.push(arrayString[i]);

            console.log(vogal);
        };

    };
};

console.log(getVogal("agua"))
