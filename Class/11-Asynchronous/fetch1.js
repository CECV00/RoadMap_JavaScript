async function logMovies () {
  const response = await fetch('https://rickandmortyapi.com/api')
  const movies = await response.json()
  console.log(movies)
}

logMovies()
