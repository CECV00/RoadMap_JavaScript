// Scope and function stack

const globalVariable = 'global' // ambito global

const moduleVariable = 'módulo' // ambito modulo

function mostrarGlobal () {
  const funcionVariable = 'Soy local a la función'

  console.log(globalVariable)
  console.log(moduleVariable)
  console.log(funcionVariable)
}

mostrarGlobal()
console.log('// ambito global: ' + globalVariable)
console.log('// ambito modulo: ' + moduleVariable)

// Con ES6 y let/const, ahora hay ámbito de bloque
if (true) {
  // Variable en ámbito de bloque
  const nuevaVariable = 'Soy del bloque (ES6)'
  console.log(nuevaVariable)
}

// summary : global, module, function, block
