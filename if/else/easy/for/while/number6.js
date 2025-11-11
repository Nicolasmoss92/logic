//FUCK OFF COPILOT

function polindrorno(string) {
    const baseString = string.replace(/\s/g, '').toUpperCase();
    const newString = string.split('').reverse().join('').toUpperCase();

    if (baseString === newString.replace(/\s/g, '')) {
        console.log(baseString, newString)
        return 'Polindrono';
    }

    return 'Não é Polindrono'
}

console.log(polindrorno('Ana'))