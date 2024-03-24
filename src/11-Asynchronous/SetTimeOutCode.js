// setTimeout(función, tiempo);

function miFuncion1 () {
  console.log('¡Hola después de 2000 milisegundos!')
}
// ejecutar una funcion despues de 2s
setTimeout(miFuncion1, 2000)

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// puedo pasarle argumentos
// setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
function miFuncion2 (arg1, arg2) {
  console.log(arg1, arg2)
}

setTimeout(miFuncion2, 3000, 'Hola', 'Mundo')

miFuncion2()

/*

    1s  = 1000ms
    10  = 10000ms
    100 = 100000ms

    Bibliografia:
    - https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

*/
