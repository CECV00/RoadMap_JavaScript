const apiUrl = 'https://rickandmortyapi.com/api'

fetch(apiUrl)
  .then(response => {
    // Verifica si la solicitud fue exitosa (código de estado HTTP 200-299)
    if (!response.ok) {
      throw new Error(`Error de red - código ${response.status}`)
    }

    // Convierte la respuesta a formato JSON
    return response.json()
  })
  .then(data => {
    // Maneja los datos obtenidos de la API
    console.log(data)
  })
  .catch(error => {
    // Maneja los errores de la solicitud
    console.error('Error al realizar la solicitud:', error)
  })
