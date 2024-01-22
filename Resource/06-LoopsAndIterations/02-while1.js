let suma = 0
let numero = 2

while (numero <= 10) {
  suma += numero
  numero += 2
}

console.log('La suma de números pares menores o iguales a 10 es: ' + suma)

// const numeroAleatorio = Math.floor(Math.random() * 10) + 1 // Número aleatorio del 1 al 10
// let intentos = 0
// let adivinanza

// while (adivinanza !== numeroAleatorio) {
//   adivinanza = parseInt(prompt('Adivina el número (del 1 al 10):'))
//   intentos++

//   if (adivinanza < numeroAleatorio) {
//     console.log('El número es mayor. Intenta de nuevo.')
//   } else if (adivinanza > numeroAleatorio) {
//     console.log('El número es menor. Intenta de nuevo.')
//   }
// }

// console.log('¡Adivinaste el número ' + numeroAleatorio + ' en ' + intentos + ' intentos!')
