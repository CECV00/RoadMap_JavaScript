/**
    Map (Mapa): Un objeto Map es una colección en la que puedes asignar claves (keys) a
        valores (values) y acceder a esos valores utilizando las claves correspondientes. A
        diferencia de los objetos normales en JavaScript, las claves en un Map pueden ser de
        cualquier tipo de dato, incluyendo objetos, funciones o incluso otros Map. Esto permite una
        mayor flexibilidad en la organización y acceso a los datos.

**/

// Ejemplo de un Map en JavaScript:
// (keys) : (values)

const mapa = new Map()

mapa.set('nombre', 'Juan')
mapa.set('edad', 30)

console.log(mapa.get('nombre')) // Salida: "Juan"
console.log(mapa.get('edad')) // Salida: 30

/**

**/
