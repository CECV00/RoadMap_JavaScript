/**

    El objeto RangeErrorse utiliza para representar errores que ocurren cuando
    un valor está fuera del rango numérico válido.
    Aquí tienes un ejemplo de cómo se podría utilizar RangeError:

    En este ejemplo, hemos creado una función llamada calcular `calcularFactorial` que
        calcula el factorial de un número entero no negativo n. Si nes un número negativo,
        lanzamos un RangeErrorcon un mensaje destry...catch.

    El bloque `catch` verifica si la excepción lanzada es de tipo `RangeErrory`
        muestra un mensaje de error específico para ese caso.
        Si la excepción no es un `RangeError`, se muestra un mensaje de error general.
        En este caso, al calcular el factorial de un número negativo,
        se lanzará `RangeError` debido a que nestá fuera del rango válido.

    Este es un ejemplo de cómo usar `RangeError` para manejar errores
        cuando los valores caen fuera de un rango numérico

**/

function calcularFactorial (n) {
  if (n < 0) {
    throw new RangeError("El valor de 'n' no puede ser negativo")
  }

  let factorial = 1
  for (let i = 2; i <= n; i++) {
    factorial *= i
  }

  return factorial
}

try {
  const resultado = calcularFactorial(-5)
  console.log('El factorial es:', resultado)
} catch (error) {
  if (error instanceof RangeError) {
    console.error('Error:', error.message)
  } else {
    console.error('Ocurrió un error inesperado:', error.message)
  }
}
