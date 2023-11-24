function factorial (n) {
  // Base case: cuando n es 0, el factorial es 1
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
// Llamada recursiva: n * factorial(n-1)

//    5         *     4 = ()  20  * 60 * 120 = 120
//    4         *     3 = ()  12  * 24       = 24
//    3         *     2 = ()  6   * 1        = 6
//    2         *     1 = ()  2   * 1        = 2
//    1         *     1 = ()  1

console.log(factorial(3)) // Resultado: 120

/*

    ¡Por supuesto! La recursión es un concepto en programación en el cual

    una función se llama a sí misma durante su ejecución.
        Esta función que se llama a sí misma se conoce como una función recursiva.
        La recursión es un enfoque poderoso y elegante para resolver problemas,
        y se utiliza en muchos algoritmos.

    Aquí hay una explicación más detallada de los conceptos mencionados:

    1. **Recursive Function (Función Recursiva):
        - Una función es considerada recursiva si
            en algún momento de su ejecución, se llama a sí misma.
            Esto crea un ciclo donde la función se invoca una y otra vez.

        - La función recursiva tiene una lógica que
            generalmente implica dividir el problema en subproblemas más pequeños
            y resolver cada subproblema llamando a la misma función.

    2. **Terminating Condition/Base Case (Condición de Terminación/Caso Base):
        - es crucial tener una condición que detenga la llamada recursiva.
            Esta condición se llama "base case" o "caso base".
        - Cuando se cumple la condición base,
            la función recursiva deja de llamarse a sí misma y
            comienza a devolver valores sin hacer más llamadas recursivas.
            Esto evita que la recursión se ejecute indefinidamente.

    3. **Elegance and Power (Elegancia y Poder):**
    - La recursión a menudo conduce a soluciones más elegantes y concisas para ciertos problemas.
      Permite abordar problemas de manera natural y expresiva,
      especialmente cuando el problema puede dividirse en subproblemas similares más pequeños.
    - Sin embargo, la recursión también debe manejarse cuidadosamente para evitar el riesgo
      de desbordamiento de la pila de llamadas (stack overflow).
      Cada llamada recursiva agrega una nueva entrada a la pila de llamadas
      y un exceso de llamadas puede conducir a un desbordamiento.

    En este ejemplo, la función `factorial` se llama a sí misma con un valor decrementado en cada paso hasta que se alcanza el caso base. La recursión permite expresar el cálculo del factorial de manera clara y concisa.

*/

// Exponente
function pow (x, n) {
  if (n === 1) {
    return x
  } else {
    return x * pow(x, n - 1)
  }
}

console.log((pow(2, 3))) // 8
