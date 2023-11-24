// 03. Arrow Functions -
/*
  Topics -->
    - simples
    - anónimas
    - cortas
    - no vinculantes
*/

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
