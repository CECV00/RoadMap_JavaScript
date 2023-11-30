async function getDataApiRAM () {
  const response = await fetch('https://rickandmortyapi.com/api') // Promesa 1 - traer datos
  const movies = await response.json() // promesa 2 - convertir datos
  console.log(movies)
}

getDataApiRAM()
