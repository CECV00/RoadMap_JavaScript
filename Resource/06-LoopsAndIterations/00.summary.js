/**
    2. do...while statement: La declaración do...while es un bucle que ejecuta un bloque de
        código al menos una vez y luego continúa repitiéndolo mientras una condición sea
        verdadera.
**/

// ejecuta minmo 1 vez, hasta cumplir condicion.

// let count2 = 0
// do {
//   console.log(`el valor de seguir es ${count2 + 1}`)
//   count2++
// } while (count2 < 5)

/**
    3. while statement: La declaración while es similar al do...while, pero verifica la
        condición antes de ejecutar el bloque de código. Si la condición es verdadera, el bloque se
        ejecuta, y esto se repite mientras la condición siga siendo verdadera.
**/

// primero verifica, Si es verdadera ejecuta loop
// let verificar = true
// let count4 = 0
// while (verificar === true) {
//   // Código a repetir
//   if (count4 <= 5) {
//     console.log(`Contador: ${count4}`)
//     count4 = count4 + 1
//   } else {
//     verificar = false
//   }
// }

/**
    labeled statement: La declaración etiquetada es una forma de identificar un bucle o una
        instrucción específica para su uso con las declaraciones break y continue.
        Normalmente se usa en combinación con bucles anidados.
**/

bucleExterno: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break bucleExterno // Sale del bucle etiquetado
    }
  }
}

/**
    6. break statement: La declaración break se utiliza para salir de un bucle en el que se
        encuentra. Puede utilizarse con o sin etiquetas para controlar qué bucle se debe romper.

    7. continue statement: La declaración continue se utiliza para saltar a la siguiente
        iteración de un bucle. Puede utilizarse con o sin etiquetas para controlar cuál bucle se debe
        continuar.
**/

// for (variable in objeto) {
//   // Código para procesar cada propiedad
// }

/**

    8. for...in statement: La declaración for...in se utiliza para recorrer las propiedades
        de un objeto. Es útil para iterar sobre todas las propiedades enumerables de un objeto.

**/

// for (elemento of iterable) {
//   // Código para procesar cada elemento
// }

/**
    Estas declaraciones y ciclos de repetición son fundamentales en la programación y se utilizan
        para controlar la ejecución de bloques de código en situaciones diversas. Cada uno tiene su
        uso específico y es importante comprender cómo funcionan para escribir código eficiente y
        lógico.
**/
