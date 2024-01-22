/*

IIFE - Immediately-Invoked Function Expression
IIFE - Expresión de Función Invocada Inmediatamente

    - encapsular variables y funciones dentro de un ámbito local
    - evitando así la contaminación del ámbito global

    1- Esta función no tiene un nombre
        se utiliza para limitar el alcance de las variables dentro de ella.
    2-  Al agregar paréntesis al final de la definición de la función
        estás diciendo a JavaScript que ejecute la función justo después de ser definida.
*/

(function () {
  const mensaje = 'Hola, soy una IIFE'
  console.log(mensaje)
})();
// ----- >>
(function (nombre) {
  const saludo = 'Hola, ' + nombre + '!'
  console.log(saludo)
})('Juan')
// ----- >>
const miModulo = (function () {
  const nombre = 'Módulo de Ejemplo'
  let contador = 0

  function incrementarContador () {
    contador++
    console.log('Contador incrementado: ' + contador)
  }

  function obtenerNombre () {
    console.log('Nombre del módulo: ' + nombre)
  }

  // Revelar solo las funciones que quieres exponer
  return {
    incrementarContador,
    obtenerNombre
  }
})()

// Uso del módulo
miModulo.obtenerNombre() // Imprime: "Nombre del módulo: Módulo de Ejemplo"
miModulo.incrementarContador() // Imprime: "Contador incrementado: 1"
miModulo.incrementarContador() // Imprime: "Contador incrementado: 2"
