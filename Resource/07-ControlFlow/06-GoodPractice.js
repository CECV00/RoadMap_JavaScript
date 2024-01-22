/**
    Working Error By Me!

    // 1- Utiliza bloques try...catch -->
        utiliza try...catch para rodear secciones de código que generen errores para evitar que se detenga la ejecución.

    // 2- Sé específico en las excepciones capturadas -->
        Se MUY específico en el bloque catch, y atrapa un error a la vez.

    //3- Proporciona información útil en las excepciones -->
        incluye mensajes sobre el error descriptivos

    //4- Registra o informa errores: -->
        registra todos los errores en un archivo para monitorearlos.

    //5- Manejo de errores asincrónicos: -->
        Usa try...catch dentro de funciones asincrónicas o maneja los errores en los manejadores de promesas.

    //6- Liberación de recursos -->
        Si usas, bases de datos, archivos u otros. liberar recursos en bloques finally para que los recursos se cierren correctamente.

    //7- Pruebas unitarias y de integración-->
        detectar errores antes de que lleguen a la producción.

    //8- Documentación -->
        Documenta cómo manejas los errores en tu código

    //9- Seguridad-->
        No reveles información confidencial o técnicamente sensible del lado del usuario/producción.

    //10- Aprende de tus errores-->
        analiza lo que sucedió, por qué ocurrió y cómo puedes evitar que vuelva a ocurrir en el futuro. El manejo de errores no solo se trata de solucionar problemas, sino también de aprender y mejorar tu código.

**/

try {
  // Código que podría lanzar una excepción
} catch (error) {
  if (error instanceof SomeSpecificError) {
    // Manejar una excepción específica
  } else {
    // Manejar otras excepciones
  }
}

throw new Error('No se puede realizar la operación debido a...')
