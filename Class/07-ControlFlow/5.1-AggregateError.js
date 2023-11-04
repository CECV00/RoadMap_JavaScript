try {
  const promises = [
    Promise.reject(new Error('Error 1')),
    Promise.reject(new Error('Error 2')),
    Promise.resolve('Success')
  ]

  Promise.allSettled(promises).then((results) => {
    const errors = results.filter((result) => result.status === 'rejected')
    if (errors.length > 0) {
      throw new AggregateError(errors, 'Multiple errors occurred')
    }
  })
} catch (error) {
  if (error instanceof AggregateError) {
    console.error('Multiple errors were caught:')
    for (const err of error) {
      console.error('Error:', err.message)
    }
  } else {
    console.error('An unexpected error occurred:', error.message)
  }
}

/**
    En este ejemplo, estamos utilizando el objeto AggregateErrorpara manejar múltiples
        errores que pueden ocurrir en una serie de promesas. Las promesas se resuelven y
        rechazan deliberadamente para ilustrar cómo manejar los errores.

    Creamos un array de promesas ( promises) que incluye dos promesas rechazadas con
        errores y una promesa resuelta.

    Usamos Promise.allSettled()para esperar a que todas las promesas se completen, ya
        sean resultados o rechazadas.

    Luego, filtramos los resultados de las promesas para encontrar aquellas que fueron
        rechazadas ( results.filter(...)).

    Si hay errores en los resultados, lanzamos un AggregateErrorque encapsula
        todos los errores

    Finalmente, manejamos el AggregateErroren el bloque catchy mostramos los mensajes.

    Ten en cuenta que AggregateErrores especialmente útil en situaciones en las que deseas
        capturar y gestionar múltiples errores simultáneamente, como al realizar solicitudes de red
        en paralelo o realizar múltiples operaciones asíncronas que podrían generar errores.

**/
