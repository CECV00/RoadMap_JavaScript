/**

    Throw, and Try...Catch...Finally

    - The try statement defines a code block to run (to try).
    - The catch statement defines a code block to handle any error.
    - The finally statement defines a code block to run regardless of the result.
    - The throw statement defines a custom error.

**/

function dividir (a, b) {
  try {
    // try: es el codigo, pronostica la "situacion" del "error".
    // el código que podría generar una excepción.
    if (b === 0) {
      throw new Error('No puedes dividir por cero.')
    }
    return a / b
  } catch (error) { // catch: codigo para manejar el error.
    console.error('Ocurrió un error:', error.message)
    return 'Error: División no válida'
  } finally { // Finally: se ejecuta. con o sin resolver el error.
    console.log('Limpieza después de la división.')
  }
}

console.log(dividir(10, 2)) // Resultado: 5
console.log(dividir(5, 0)) // Resultado: Error: División no válida
