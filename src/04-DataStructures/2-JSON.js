/**
    fetch('https://rickandmortyapi.com/api')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud.')
      }
      return response.json() // Parsea la respuesta como JSON
    })
    .then(data => {
      // Hacer algo con los datos obtenidos
      console.log(data)
    })
    .catch(error => {
      console.error('Error:', error)
    })
**/

const myArray = [1, 3, 2, 4, 6, 5, 9, 8, 7, 0]
const TamañoArray = myArray.length
// console.log(TamañoArray) --> 10
// console.log(myArray[1]) --> Posicion 1

// Ciclor de repeticiones
// empezar en "0" implaca n+1 por el arreglo --> osea 13 impreciones
for (let z = 1; z <= TamañoArray; z += 1) {
  // Ciclor del array
  console.log(z)
}

// recorre todo el arreglo

for (let x = 0; x <= TamañoArray; x += 1) {
  const posicionArray = myArray[x] // Posicion x en el array
  console.log(posicionArray)
}

// Algoritmo para cambiar posicion de valores
for (let x = 0; x <= TamañoArray; x += 1) {
  // Posicion x en el array
  const posicionArray = myArray[x]
  console.log(`Posicion Array actual ${posicionArray}`)
  // Valores temporales
  const indice1 = myArray[x]
  const indice2 = myArray[x] + 1

  // comparador
  if (indice1 < indice2) {
    console.log(`este valor [${myArray[x]}] es menor que el valor [${myArray[x]}], NO MOVER`)
  } if (myArray[x] > myArray[x + 1]) {
    // almacen temporal
    console.log(`este valor [${myArray[x]}] es mayor que el valor [${myArray[x]}], SI MOVER`)
    // myArray[x] = myArray[x + 1]
  }
}
