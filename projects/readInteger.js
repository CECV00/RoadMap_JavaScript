const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Ingrese un número: ', (numeroIngresado) => {
  console.log(`Número ingresado: ${numeroIngresado}`)
  rl.close()
})

rl.on('close', () => {
  console.log('¡Hasta luego!')
  process.exit(0)
})

/*

  NOTES_OF_DEVELOMENT

  - solicitud sencilla, func flecha para cerrar evento

*/
