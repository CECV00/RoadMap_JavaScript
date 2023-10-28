/*
    https://nodejs.org/api/documentation.html
*/
// -----//-----/Librerias/-----//-----//
const fs = require('fs/promises') // --> https://nodejs.org/api/fs.html
const path = require('path') // --> https://nodejs.org/api/path.html
const utf8 = 'utf-8' // --> Formmato de llectura
const file_readed = './filetext1.txt' // --> ubicacion archivo

const file_path = path.join(__dirname, file_readed)

async function myReadFileFuncSync () {
  try {
    const data = fs.readFileSync(file_readed, utf8)
    console.log(data)
  } catch (err) {
    console.error(err)
  }
}

async function myReadFileFuncPromise () {
  try {
    const data = await fs.readFile(file_readed, { encoding: utf8 })
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
// Function Files
myReadFileFuncPromise()
// myReadFileFuncSync();
