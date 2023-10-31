/**
    3. **Método `Object.is()`**:

    - `Object.is(value1, value2)`: Este método determina si dos valores son exactamente iguales,
        teniendo en cuenta tanto el valor como el tipo de datos. Es similar al operador `===`,
        pero tiene algunas diferencias sutiles en su comportamiento. En particular, `Object.is()`
        considera que `NaN` es igual a `NaN`, a diferencia de `===`.

    Ejemplo:
        Object.is(5, 5); // true
        Object.is(NaN, NaN); // true

    Entonces, la principal diferencia entre `==` y `===` radica en cómo manejan la conversión de
    tipo. `==` intentará convertir los valores para hacer una comparación, mientras que `===`
    requiere que los valores sean del mismo tipo sin conversión. `Object.is()` es similar a
    `===`, pero con un comportamiento ligeramente diferente en casos específicos.

    En la mayoría de los casos, se recomienda usar `===` para comparaciones estrictas de valor y
    tipo, ya que evita sorpresas debido a la conversión de tipo automática. `Object.is()` se usa
    ocasionalmente cuando necesitas un comportamiento específico, como la igualdad de `NaN`
    con `NaN`.

**/

Object.is(5, 5) // true
Object.is(NaN, NaN) // true

/**
    Claro, aquí tienes más ejemplos de cómo funciona el método `Object.is()` en comparaciones de igualdad:
    1. Comparación de valores primitivos:
**/

Object.is(5, 5) // true
Object.is('hola', 'hola') // true
Object.is(true, true) // true
Object.is(null, null) // true
Object.is(undefined, undefined) // true

Object.is(5, '5') // false, ya que los tipos son diferentes
Object.is('hola', 'adiós') // false
Object.is(true, false) // false

/**
    2. Comparación de NaN:
**/

Object.is(NaN, NaN) // true, a diferencia de ===, Object.is considera NaN igual a NaN

/**
    3. Comparación de cero negativo y positivo:
**/

Object.is(-0, 0) // false, considera -0 y 0 como diferentes

/**
    4. Comparación de objetos:
**/

const obj1 = { a: 1 }
const obj2 = { a: 1 }
Object.is(obj1, obj1) // true, son la misma referencia
Object.is(obj1, obj2) // false, son referencias diferentes

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]
Object.is(arr1, arr1) // true, son la misma referencia
Object.is(arr1, arr2) // false, son referencias diferentes

/**
    `Object.is()` es útil cuando necesitas realizar comparaciones de igualdad estricta teniendo
        en cuenta tanto el valor como el tipo de datos, y cuando deseas que `NaN` sea igual a `NaN`.
        Ten en cuenta que `===` se utiliza con más frecuencia para la mayoría de las comparaciones
        en JavaScript debido a su amplia compatibilidad y uso general. `Object.is()` se utiliza
        específicamente cuando deseas un comportamiento específico de igualdad.
**/
