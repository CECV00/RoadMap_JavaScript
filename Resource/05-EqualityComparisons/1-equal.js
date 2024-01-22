/**
    En JavaScript, hay dos conjuntos de operadores de comparación que se utilizan para comparar valores:

    los operadores de comparación de valor y los operadores de comparación
    de identidad. Estos operadores son `==`, `===` y `Object.is()`.

    1. **Operadores de Comparación de Valor**:

        - `==` (igualdad): Este operador compara dos valores, realizando una conversión de tipo
        antes de la comparación. Si los valores son de tipos diferentes, intentará convertirlos a un
        tipo común antes de compararlos. Esto significa que los valores pueden ser diferentes
        tipos de datos, pero aún se considerarán iguales si son iguales después de la conversión
        de tipo.

        Ejemplo:
        5 == "5"; // true, ya que se convierte el string "5" a número

    2. **Operadores de Comparación de Identidad**:

        - `===` (identidad): Este operador compara dos valores teniendo en cuenta tanto el valor
        como el tipo de datos. Los valores deben ser del mismo tipo y tener el mismo valor para
        que la comparación sea verdadera.

        5 === 5; // true, ya que ambos son números y tienen el mismo valor

**/

// Testing

const x = 5
const y = '5'
// cuando se usa "===" compara el tipo de dato y su valor
if (x === y) {
  console.log('valores iguales con ===')
  console.log(`DataType: ${typeof x} y Value: ${x}`)
  console.log(`DataType: ${typeof y} y Value: ${y}`)
} else {
  console.log('valores No iguales con ===')
  console.log(`DataType: ${typeof x} y Value: ${x}`)
  console.log(`DataType: ${typeof y} y Value: ${y}`)
}

// cuando se usa "==" los convierte al mismo tipo y luego solo compara sus valores
if (x == y) {
  console.log('valores iguales con ==')
  console.log(`DataType: ${typeof x} y Value: ${x}`)
  console.log(`DataType: ${typeof y} y Value: ${y}`)
} else {
  console.log('valores No iguales con ==')
  console.log(`DataType: ${typeof x} y Value: ${x}`)
  console.log(`DataType: ${typeof y} y Value: ${y}`)
}

Object.is(5, 5) // true
Object.is(NaN, NaN) // true
