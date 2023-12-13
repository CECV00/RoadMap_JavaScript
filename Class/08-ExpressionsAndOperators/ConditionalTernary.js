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

/*

  Por favor al correo adjuntar un diagrama de flujo
  y otro de bases de datos en donde se describa la siguiente situacion:

  Una persona necesita desplazarse desde el portal Tunal hasta la estación de aguas

  ten en cuenta desarrollar caminos alternos y situaciones de excepción

  Por ejemplo, tener en cuenta situaciones como:

  Tener vehículo, utilizar Transmilenio u otras posibilidades

*/
