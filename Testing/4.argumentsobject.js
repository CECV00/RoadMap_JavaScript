const Barrera1 = '// ----- // ----- // ----- // ----- // ----- // ----- //'
const a = 'manzana'
const b = 'plátano'
const c = 'naranja'

function longestString (a, b, c) {
  let longest = ''
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i]
    }
  }
  return longest
}

const cadenaMasLarga = longestString(a, b, c)
console.log(cadenaMasLarga) // Imprimirá "plátano"
console.log(Barrera1)
// arguments.length
// arguments[@@iterator]
// arguments.callee

function myConcat (separator) {
  const args = Array.prototype.slice.call(arguments, 1)
  return args.join(separator)
}

const prueba2 = myConcat(a, b, c)
console.log(prueba2) // Imprimirá "plátano"
console.log(Barrera1)

function list (type) {
  let html = `<${type}l><li>`
  const args = Array.prototype.slice.call(arguments, 1)
  html += args.join('</li><li>')
  html += `</li></${type}l>` // end list
  return html
}
const prueba3 = list(a, b, c)
console.log(prueba3) // Imprimirá "plátano"
console.log(Barrera1)
