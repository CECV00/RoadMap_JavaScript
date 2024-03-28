/**
    Set (Conjunto): Un objeto Set es una colección de valores únicos, donde no se permiten
        duplicados. Los valores en un Set no tienen claves, y los elementos se almacenan en el
        orden de inserción.

    útiles cuando

        - necesitas mantener una lista de elementos únicos
        - no estás interesado en asociar valores con claves

**/

// Ejemplo de un Set en JavaScript:

const conjunto = new Set()

conjunto.add(1)
conjunto.add(2)
conjunto.add(1) // El 1 se ignora, ya que los Sets no permiten duplicados

console.log(conjunto.has(1)) // Salida: true
console.log(conjunto.has(2)) // Salida: true


// const setUsuario = new Set()

// setUsuario = [
//     nombre, 'carlangas',
//     Apellido, 'tagnas',
//     edad, 23
// ]

// console.log(setUsuario)


const setUsuario = new Set();

setUsuario.add('carlangas');
setUsuario.add('tagnas');
setUsuario.add(edad, 23);

console.log(setUsuario.N);


/**

**/

/**

**/
