const country = 'Paris' // For Country
const RequestURL = 'current.json' // History

// https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13

const URL_API = `https://weatherapi-com.p.rapidapi.com/${RequestURL}?q=${country}`
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3cb56e71c7mshec1d8f7d5fbf078p1edf88jsnf64e0d6527e4',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
}

async function getDataApiWeather () {
  const response = await fetch(URL_API, options) // Promesa 1 - traer datos
  const data = await response.json() // promesa 2 - convertir datos
  console.log(data)
}

getDataApiWeather()

/*

  Bibliografia -->

    Documentacion:
    https://www.weatherapi.com/docs/

*/
