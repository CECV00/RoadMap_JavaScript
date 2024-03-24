// SyntaxError

/**

    El objeto `SyntaxErrorse` utiliza para representar errores en la sintaxis del código JavaScript.
        Estos errores ocurren cuando el código no cumple con las reglas de sintaxis del lenguaje.
        Aquí tienes un ejemplo de cómo se podría utilizar SyntaxError:

    estamos utilizando eval() para ejecutar una cadena que contiene un error de sintaxis.
        La cadena se cierra con un solo paréntesis
        en lugar de un par de paréntesis en la llamada a console.log().
        Como resultado, se lanzará un SyntaxError. Luego, en el bloque catch, verificamos si la excepción es de tipo SyntaxErrory mostramos un mensaje de error específico indicando que se trata de un error de sintaxis.

    Tenga en cuenta que es importante evitar eval() siempre que sea posible,
        ya que ejecutar código dinámico puede presentar riesgos de seguridad.
        Sin embargo, este ejemplo se utiliza para ilustrSyntaxError.

    Los errores de sintaxis suelen ocurrir cuando se escriben mal las estructuras del lenguaje,
        como paréntesis, llaves, comas, etc. Al manejarlos,
        SyntaxError puedes proporcionar mensajes de error útiles
        para indicar dónde se encuentra el error de sintaxis y corregirlo.

**/

try {
  // Intentamos ejecutar un código con un error de sintaxis
  eval("console.log('Hello, world'")
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error('Error de sintaxis:', error.message)
  } else {
    console.error('Ocurrió un error inesperado:', error.message)
  }
}
