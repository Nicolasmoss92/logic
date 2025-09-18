// Sistema de Notas: Escreva uma função que recebe uma nota de 0 a 100.
// Se a nota for 90 ou mais, retorne "A".
// Se for 80 ou mais, retorne "B".
// Se for 70 ou mais, retorne "C".
// Se for 60 ou mais, retorne "D".
// Caso contrário, retorne "F".
//FUCK OFF COPILOT

function verifyScore(score) {
  switch (score) {
    case score >= 90:
    return "A"

    case score >= 80:
      return "B"
    
    case score >= 70:
      return "c"
    
    case score >= 60:
      return "D"
    
    default:
      return "F"
  }
}

console.log(verifyScore(60))