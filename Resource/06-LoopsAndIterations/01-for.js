// ----- // ----- // ----- // FOR-In // ----- // ----- // ----- //
/**
    1. for statement: La declaración for es una estructura de bucle que se utiliza para repetir
        un bloque de código un número específico de veces. Se consta de tres partes:
        la inicialización, la condición y la expresión final.
**/

// For --> repetir un ciclo, sabiendo el N# de repeticiones {Contador, condicional, incrementoXciclo}
for (let count1 = 0; count1 < 5; count1++) {
  // Código a repetir
  console.log(`Contador es ${count1}`)
}

// ----- // ----- // ----- // FOR-In // ----- // ----- // ----- //
/**
    El bucle for...in es una estructura de control en JavaScript que se utiliza para recorrer las
        propiedades enumerables de un objeto. Es especialmente útil cuando deseas iterar sobre las
        claves o propiedades de un objeto, como en el caso de un objeto literal o un objeto creado
        con la notación de llaves y valores.

    La sintaxis básica de un bucle for...in es la siguiente:
        // for (variable in objeto) {
        //     // Código a ejecutar en cada iteración
        // }

    variable: Es una variable que toma el nombre de la propiedad en cada iteración. Puedes
        elegir el nombre de esta variable, generalmente se utiliza una variable como `key` o `prop`
        para representar la clave.

    objeto: Es el objeto cuyas propiedades enumerables se recorren.

    En cada iteración del bucle, la variable toma el nombre de una propiedad del objeto y puedes
        acceder al valor de esa propiedad utilizando la variable. Aquí tienes un ejemplo que muestra
        cómo utilizar un bucle for...in para recorrer las propiedades de un objeto:

    Es importante destacar que el bucle for...in recorre solo las propiedades enumerables
        del objeto y no recorrerá propiedades heredadas a través de la cadena de prototipos.
        Además, ten en cuenta que el orden en el que se recorren las propiedades puede variar en
        función de la implementación de JavaScript, por lo que no se garantiza un orden específico.

    for (variable in objeto) {
    // Código a ejecutar en cada iteración
    }

    // for (key in object) {
    // executes the body for each key among object properties
    // }

**/
// Evolution For
// FOR IN --> EXAMPLE 1 -->
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Nueva York'
}

for (const clave in persona) {
  console.log(`Clave: ${clave}, Valor: ${persona[clave]}`)
}

// FOR IN --> EXAMPLE 2 -->

const user = {
  name: 'John',
  age: 30,
  isAdmin: true
}

for (const key in user) {
  // keys
  console.log(key) // name, age, isAdmin
  // values for the keys
  console.log(user[key]) // John, 30, true
}

// ----- // ----- // ----- // FOR-OF // ----- // ----- // ----- //
/**
    Claro, el bucle for...of se utiliza para recorrer elementos en estructuras de datos
        iterables, como arreglos, cadenas de texto, mapas, conjuntos, entre otros. Aquí tienes un
        ejemplo de cómo usar for...of con un arreglo:

    Este bucle recorrerá el arreglo numeros y en cada iteración, la variable numero contendrá
        el valor del elemento actual del arreglo. El resultado en la consola sería:

    El bucle for...of simplifica la iteración a través de los elementos del arreglo sin necesidad
        de preocuparse por los índices. Es especialmente útil cuando trabajas con arreglos o
        estructuras de datos donde solo te interesa el valor de los elementos. También puedes usar
        for...of con cadenas de texto para recorrer los caracteres de una cadena o con otros
        objetos iterables como mapas y conjuntos.
**/

const numeros = [1, 2, 3, 4, 5]

for (const numero of numeros) {
  console.log(numero)
}
