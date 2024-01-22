/**
    Las "labeled statements" son declaraciones de etiquetas en JavaScript que se utilizan para
        identificar bloques de código y se asocian comúnmente con las declaraciones break
        y continue para controlar el flujo de ejecución en bucles anidados. Una "labeled statement"
        consiste en una etiqueta (un identificador seguido de dos puntos :) que se coloca antes de
        una instrucción en el código.
**/

etiqueta: instrucción

/**

    Una vez que has etiquetado una instrucción, puedes referenciar esa etiqueta en las
        declaraciones break y continue para indicar a qué bucle o bloque deseas aplicar la
        acción. Por lo tanto, son útiles cuando tienes bucles anidados y deseas controlar cuál bucle se
        debe detener o continuar.

    Aquí tienes un ejemplo de cómo usar las "labeled statements" en combinación con las
        declaraciones break y continue:

**/

bucleExterno: for (let i = 0; i < 3; i++) {
  bucleInterno: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break bucleExterno // Sal del bucle etiquetado como "bucleExterno"
    }
    if (i === 0 && j === 2) {
      continue bucleInterno // Salta a la siguiente iteración del bucle "bucleInterno"
    }
    console.log(`i: ${i}, j: ${j}`)
  }
}

/**

    En este ejemplo, hemos etiquetado los bucles como "bucleExterno" y "bucleInterno". Cuando
        se ejecuta break bucleExterno, se sale completamente del bucle "bucleExterno". Cuando
        se ejecuta continue bucleInterno, se salta a la siguiente iteración del bucle "bucleInterno".

    Las "labeled statements" son útiles cuando necesitas mayor control sobre la ejecución en
        bucles anidados y pueden facilitar la lectura y el mantenimiento del código en situaciones
        complejas. Sin embargo, es importante usarlas con moderación y de manera que el código
        siga siendo legible.

**/
