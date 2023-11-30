/*
    Lexical scoping

    se refiere al alcance de los argumentos.
        que son determinados se compilacion el codigo
        y del como se pueden llamar dependiendo de su ubicacion
        OSEA su contexto lexico.

    En un sistema de "lexical scoping" -->

    resolver variables
        se basa en la estructura del codigo y no como se compila
        una funcion recuerda el ambito en que se creo

    Lexical Environment:

        se refiere al conjunto de variables locales y funciones
            que están disponibles para esa función
            en el momento de su definición.

*/

function outer () {
  const outerVariable = 'I am outer'

  function inner () {
    const innerVariable = 'I am inner'
    console.log(outerVariable + ', ' + innerVariable)
  }

  return inner
}

const closureFunction = outer()
closureFunction() // Imprime: "I am outer, I am inner"

/*
    Closures:
    La comprensión de "lexical scoping" es fundamental para entender los "closures" en JavaScript.
        Un "closure" se refiere a la capacidad de una función de recordar y acceder a
        variables de su entorno léxico incluso después de que
        la función haya terminado de ejecutarse.

    En resumen, "lexical scoping" y "lexical environment"
    son conceptos clave para entender cómo funcionan
    los ámbitos y cómo las funciones en JavaScript pueden formar "closures",
    permitiéndoles acceder a variables fuera de su propio ámbito.

*/
