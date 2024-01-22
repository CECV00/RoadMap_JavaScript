/*
    Using This Keyworld
    this es una variable especial
    que siempre hace elocuencia hacia algo (su ultimo dueño)
    y señalara eso dependiendo de su ubicacion.
*/

// Using This Keyworld - suing in alone
// Variables globales
global.nick = 'Variable global nick'
global.epale = 'Variable global epale'

// Using This Keyworld - in a Object
const myObject1 = {
  nick: 'objeto1 nick',
  epale: 'objeto1 epale',
  getName
}

// Using This Keyworld - in a function
function getName () {
  console.log('// ----- // ----- /1/ ----- // ----- //')
  console.log(`Variable --> ${this.nick}`)
  console.log(`Variable --> ${this.epale}`)
  console.log('// ----- // ----- /2/ ----- // ----- //')
}

// Using This Keyworld - in a handlers
const myButton = document.getElementById('myButton')

myButton.addEventListener('click', function () {
  console.log(this) // refers to myButton element
})

// Call by Function {use: VarGlobal}
getName()
// Call by Objects {use: VarObjects}
myObject1.getName()

console.log(global.this) // refers to the global object (e.g., window in a browser)
