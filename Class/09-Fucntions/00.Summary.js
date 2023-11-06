// 01. Defining and calling functions

function saludar1 () {
  console.log('¡Hola, mundo!')
}
saludar1() // llamado

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// 02. Functions Parameters
function saludarPersona2 (nombre) {
  console.log(`¡Hola, ${nombre}!`)
}
saludarPersona2('Carlos') // Llama a la función con el argumento "Carlos"

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// 02-1. Functions Default Params -
// te permite asignar valores predeterminados a los parámetros de una función.
function saludar2 (nombre = 'Invitado') {
  console.log(`¡Hola, ${nombre}!`)
}

saludar2() // Imprime "¡Hola, Invitado!"
saludar2('Carlos') // Imprime "¡Hola, Carlos!"

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// 02-2. Functions Rest Params -
// te permite varias variables en un solo argumento se declara usando ...parametro
function sumar2 (...numeros) {
  let total = 0
  for (const numero of numeros) {
    total += numero
  }
  return total
}
console.log(sumar2(1, 2, 3, 4, 5)) // Imprime 15

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// 03. Arrow Functions -
// una forma más concisa de funcione, simples, anónimas, cortas y no vinculantes
// EXAMPLE 1
const sumar3 = (a, b) => a + b
console.log(sumar3(3, 5)) // Imprime 8
// EXAMPLE 2
const cuadrado3 = x => x * x
console.log(cuadrado3(4)) // Imprime 16
// EXAMPLE 3
const saludar3 = () => '¡Hola, mundo!'
console.log(saludar3()) // Imprime "¡Hola, mundo!"
// EXAMPLE 4
const numeros3 = [1, 2, 3, 4, 5]
const cuadrados3 = numeros3.map(numero => numero * numero)
console.log(cuadrados3) // Imprime [1, 4, 9, 16, 25]
// EXAMPLE 5
function Persona3 () {
  this.nombre = 'Carlos'
  this.saludar3 = () => {
    console.log(`¡Hola, soy ${this.nombre}!`)
  }
}
const persona3 = new Persona3()
persona3.saludar3() // Imprime "¡Hola, soy Carlos!"

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// 04. Built-in Functions
/**
los "built-in objects"
  son objetos predefinidos en JavaScript que contienen propiedades y métodos
    ejemplos
    "built-in objects" son `Number`, `Math`, `Date`, `String`, `Array`, `Object`, y muchos otros.

mientras las

"built-in functions"
  son funciones predefinidas en JavaScript que realizan tareas específicas.
    ejemplos
    `parseInt()`, `parseFloat()`, `isNaN()`, `eval()`, y otras funciones
**/

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// 05. Arguments Object
//
function longestString () {
  let longest = ''
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i]
    }
  }
  return longest
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// 0.
//

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// 0.
//
