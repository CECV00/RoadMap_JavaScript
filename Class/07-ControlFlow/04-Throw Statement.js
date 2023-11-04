/**

    the "throw" use to send error personal

    1- when send a excepcion, stop the actual fucntion and another code after code stop in this moment.

    2- then, the program find the code strucutre "try...catch"

    El "Throw Statement" es útil para manejar situaciones excepcionales o errores personalizados en tu código.
        Te permite controlar el flujo del programa cuando se producen condiciones inesper

**/

/**
    Example with 1

    throw new Error('Esto es un error personalizado')
    try {
    // Código que podría lanzar una excepción
    } catch (error) {
    // Manejar la excepción
    }

**/

function divide (a, b) {
  if (b === 0) {
    // If the denominator is 0, throw a custom exception
    throw new Error('Division by zero is not allowed.')
  }
  return a / b
}

try {
  const result = divide(10, 2)
  console.log('Result:', result)

  const errorResult = divide(5, 0) // This will throw an exception
  console.log("This won't be executed.")
} catch (error) {
  // Catch the exception and handle it
  console.error('An error occurred:', error.message)
}

console.log('The program continues after the exception.')
