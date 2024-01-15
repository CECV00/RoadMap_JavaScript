// practice the learned, Array, for, if

const myArray = [1, 3, 2, 4, 6, 5, 9, 8, 7, 0]

function burbuja (arr) {
  const n = arr.length // Size of array --> 10
  let intercambiado // checking
  do {
    intercambiado = false
    for (let i = 0; i < n - 1; i++) { // i < tamaño.arreglo - 1
      // arr[i] = indice1 , arr[i + 1] = indice2
      if (arr[i] > arr[i + 1]) { // Change elements. IF {Sort incorrect}
        const temp = arr[i] // Slot Temp
        arr[i] = arr[i + 1] // Replace indice1 por el indice2
        arr[i + 1] = temp // Replace indice2 por el indice1
        intercambiado = true
      }
    }
  } while (intercambiado) // repetir IF {a change happends}
  return arr //
}

const arrayOrdenado = burbuja(myArray)
console.log(arrayOrdenado)
