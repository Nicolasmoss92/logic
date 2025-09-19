// Enunciado: Crie uma função que recebe um ano e retorna true se ele for um ano bissexto.
// Um ano é bissexto se for divisível por 4.
// Mas, se for divisível por 100, não é bissexto...
// A menos que seja divisível por 400.

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true; // Exemplo: 2000 é bissexto
  } else if (year % 100 === 0) {
    return false; // Exemplo: 1900 não é bissexto
  } else if (year % 4 === 0) {
    return true; // Exemplo: 2024 é bissexto
  } else {
    return false; // Exemplo: 2023 não é bissexto
  }
}