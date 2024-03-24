// las funciones pueden ser recibidas como parametros

// (resolve) con el resultado despues de 500ms
const operationAsync = (numero1, numero2, op) => {
  const resultado = numero1 + numero2
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(resultado)
    }, 500)
  })
}

operationAsync(1, 3)
  .then(result => console.log(result))

/*

  Constructor de una promera
    new Promise (resolve, reject)
      resolve es lo que se devuelve cuandoa acabe,
      reject es lo que salio mal

  async/await is a special syntax to work with promises in a more comfortable fashion.
    We use async keyword to declare a async function that return a Promise,
    and the await keyword makes a function wait for a Promise.

*/
