// las funciones pueden ser recibidas como parametros

const operationSync1 = (numero1, numero2, op1) => {
  return op1(numero1, numero2)
}

const operationSync2 = (numero1, numero2, op2) => {
  const resultado = numero1 + numero2
  return setTimeout(() => {
    op2(resultado)
  }, 500)
}

// {(a, b) => a + b} es una funcion, recibida por op
console.log(operationSync1(1, 3, (a, b) => a + b))

operationSync2(1, 4, (result) => {
  console.log(result)
})

/*
      que op es el CALLBACK
      Le estamos apsando una funcion como parametro a una funcion
      ESTO ES UN CALLBACK

  */
