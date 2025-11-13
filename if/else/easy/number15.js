//FUCK OFF COPILOT

function mediaAritimetica(arr) {
    const arraySoma = [];
    let soma = 0;

    if (arr.length === 0) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        soma = soma + arr[i];
    }

    return soma / arr.length;

}