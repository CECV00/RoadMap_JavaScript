const myArray = [1, 3, 2, 4, 6, 5, 9, 8, 7, 0]

// Índices de los elementos que deseas intercambiar
const indice1 = 2 // Índice del primer valor a intercambiar
const indice2 = 7 // Índice del segundo valor a intercambiar

// Almacena el valor en el primer índice en una variable temporal
const temp = myArray[indice1]

// Asigna el valor en el segundo índice al primer índice
myArray[indice1] = myArray[indice2]

// Asigna el valor almacenado en la variable temporal al segundo índice
myArray[indice2] = temp

console.log(myArray) // El array ahora tiene los valores intercambiados
