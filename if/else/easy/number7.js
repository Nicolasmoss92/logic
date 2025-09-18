// Enunciado: Crie uma função que recebe três comprimentos de lados de um triângulo.

// Se todos os lados forem iguais, retorne "Equilátero".

// Se dois lados forem iguais, retorne "Isósceles".

// Caso contrário, retorne "Escaleno".

function typeTriangle(ladoOne, ladoTwo, ladoThree) {
  if (ladoOne === ladoTwo && ladoOne === ladoThree && ladoTwo === ladoThree) {
    return "Equilátero"
  } else if (ladoOne === ladoTwo || ladoOne === ladoThree || ladoTwo === ladoThree) {
    return "Isósceles";
  }
} return "Escaleno"


