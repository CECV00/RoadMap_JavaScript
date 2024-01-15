const fs = require('fs/promises') // .promises
const path = require('path')

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

const carpeta = '' // PathOfDirectory
const formatListIMG = ['.gif', '.jpeg', '.jpg', '.png'] // List NameFormatIMG
const formatListVID = ['.mp4', '.webm'] // List NameFormatVID
const nameFormatFil = ['VID', 'IMG'] // List Name
const extensionDeseada = formatListIMG[3] // ChangeFileFormat
const nameArchiveFile = nameFormatFil[1] // ChangeFileName
const contador = 414 // 413

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

async function fileChangeNameAll (carpeta, extensionDeseada, contador) {
  try {
    const archivos = await fs.readdir(carpeta) // Get list file on directory

    // Iterar sobre cada archivo y cambiar el nombre de manera asíncrona
    await Promise.all(archivos.map(async (archivo) => {
      const rutaAntigua = path.join(carpeta, archivo)
      const extensionActual = path.extname(archivo)

      // Check ExtenFile Actual vs Deseada
      if (extensionActual === extensionDeseada) {
        // const nombreBase = path.parse(archivo).name
        // const nuevoNombre = `${nombreBase}_${sufijo}_${contador}${extensionActual}`
        const nuevoNombre = `${nameArchiveFile}_${contador}${extensionActual}`
        const nuevaRuta = path.join(carpeta, nuevoNombre)

        contador++

        // change namefile method Syncrony
        await fs.rename(rutaAntigua, nuevaRuta)
        console.log(`El archivo ${archivo} fue renombrado a ${nuevoNombre}`)
      }
    }))

    console.log('Operación completada exitosamente.')
  } catch (error) {
    console.error('Error durante la operación:', error)
  }
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

fileChangeNameAll(carpeta, extensionDeseada, contador)
