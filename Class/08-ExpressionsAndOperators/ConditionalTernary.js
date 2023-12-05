/*
    condition ? val1 : val2

    Example Code 1 -->
        condicion ? expresionSiVerdadero : expresionSiFalso;

function evaluarEdadPersona (edad) {
  const result = edad >= 'adulto' , 'menor'
  console.log(result)
}

*/

// global
const age = 77
const result = age >= 18 ? 'adult' : 'minor'
console.log(result)

// Function
function examinarEdad (valor) {
  const result = valor >= 18 ? 'adult' : 'minor'
  // console.log(result)
  return result
}

const functionResult = examinarEdad(age)
console.log(functionResult)
