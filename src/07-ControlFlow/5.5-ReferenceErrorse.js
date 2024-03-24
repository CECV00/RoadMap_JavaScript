/**

    El objeto `ReferenceErrorse` utiliza para representar errores que ocurren
        cuando se intenta acceder a una variable o un objeto
        que no está definido en el alcance actual.

    Aquí tienes un ejemplo de cómo se podría utilizar `ReferenceError`:
        intentamos acceder a la variable `variableNoDefinida`,
        que no está definida en el alcance actual. `ReferenceError`.
        Luego, en el bloque `catch`, verificamos si la excepción es de tipo `ReferenceError`
        y mostramos un mensaje de error específico indicando que la variable no está definida.

    El uso más común de `ReferenceError`
        ocurre cuando intentas acceder a una variable que no existe o
        cuando intentas acceder a una propiedad de unReferenceError,
        puedes proporcionar mensajes de error descriptivos
        que te ayudarán a depurar tu código y entender qué salió mal.

**/

try {
  // Intentamos acceder a una variable que no está definida
  console.log(variableNoDefinida)
} catch (error) {
  if (error instanceof ReferenceError) {
    console.error('Error: La variable no está definida.')
  } else {
    console.error('Ocurrió un error inesperado:', error.message)
  }
}
