// 02. Functions Parameters
// --> 2.0 params --> argumentos que entran en la func.
// --> 2.1 Deafoult Params --> dato si no entra el argumento = 'Amigo'
function bienvenidaPersona (nombre = 'Amigo') {
  console.log(`Welcome, ${nombre}!, have a good day.`)
}
bienvenidaPersona()
bienvenidaPersona('Carlos')

// 02-2. Functions Rest --> pasar N argumentos
function sumar2 (...numeros) {
  let total = 0
  for (const numero of numeros) {
    total += numero
  }
  return total
}
// Result 15
console.log(sumar2(1, 2, 3, 4, 5))
