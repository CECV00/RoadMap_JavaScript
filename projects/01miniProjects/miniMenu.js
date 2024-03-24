const readline = require('readline')

const numeroIngresado = 2

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Ingrese Su opcion: ', (numeroIngresado) => {
  console.log(`Número ingresado: ${numeroIngresado}`)
  rl.close()
})

function welcomeMessage () {
  console.log('// ----- // ----- // ----- // ----- // ----- // ----- //')
  console.log('welcome to the menu for create a password.')
  console.log('que tipo de contraseña quieres?')
  console.log('   1- letras minusculas')
  console.log('   2- letras mayusculas')
  console.log('   3- letras numericas')
  console.log('// ----- // ----- // ----- // ----- // ----- // ----- //')
}

function optionMenu (inputOption) {
  switch (inputOption) {
    case inputOption = 1:
      console.log('1- letras minusculas')
      break
    case inputOption = 2:
      console.log('2- letras mayusculas')
      break
    case inputOption = 3:
      console.log('3- letras numericas')
      break
    default:
      console.log('Invalid day.')
  }
}

console.log('// ----- // ----- // ----- // ----- // ----- // ----- //')
welcomeMessage()
rl.question()
optionMenu(numeroIngresado)
