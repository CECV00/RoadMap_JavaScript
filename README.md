# Summary

Este repositorio se enfoca en el de apredizaje, estudio y trabajo para cada uno de los elementos designados por RoadMap para el aprendizaje de javascript.

# Objetivo
- Aprender todo sobre javascript recorriendo cada uno de los elementos de RoadMap incluyendo componentes faciles, intermedios y avanzados.

# Objetivo Especifico
- Estudiar cada uno de llos elementos de roadmap (Exceptuando los teoricos no relevantes).
- realizar pruebas y ensaños en forma de practica para eso elementos.
- Redactar un resumen para el entendimiento de ese elemento para otros programadores.

Adjunto el historial de mi progreso -->
https://roadmap.sh/javascript?s=645ab341f3d9ecfa51d91427

# Recordatorios Del Resumen -->
- Estos recordatorios solo sirve si comprender bien el tema. solo sirve para recordar puntos clalves de codigo. para mayor entendimiento los archivos contienen un detallado mas preciso.

### A-) All About Variables

+ **Como declarar variables** {var, let, const}
+ **Hoisting** {Proceso del interprete que mueve variables, clases y funciones. a lo alto del scope y prioriza su codigo}

Image:

![](https://raw.githubusercontent.com/CarlosCalderon01/JavaScriptByRoadmaps/main/resource/RulesName.webp)

+ **Naming Rules** reglas para nombrar variables
 - mi forma estandar de nombrarlas en mis proyetos
		let camelCasing; // For Function
		let PascalCasing; // For Class
		let snake_casing; // For Variables
		let SCREAMING_SNAKE_CASING; // For Constants
+ **Scope** el alcance de las variables
 - block
 - function
 - Global

### B-)  Data Types

+ existen varios de tipos de datos se dividen en dos grupos
  - **primitivos**
    - undefined
    - null
    - Symbol
    - string
    - boolean
    - number
    - bigint

 - **no primitivos (complejos)**
    - Type Operator
    - Object
     - Built in Objecto
     - Objectt Prototype
       - Prototypal Inheritance

### C-) Type Casting

+ se refiere al tipo de dato y de como estos se convierten o se cambian.

### D-) Data Structures

+ se refiere a tipo de datos que son capaces de almacenar mas de 1 dato en su interior.
  - Arrays
  - Map
  - Set
  - weak (Map, Set)
  - JSON

### E-) Equality Comparisons

+ Formas que se usan para comparar.
  - == (No Stricto -> compara valores)
  - === (Stricto -> compara valores y tipo de dato))
  - Object.is(Objeto1, Objeto2)

### F-) Loops And Iterations
+ ciclos de repeticion para todo o para iterar los (Data Sctructures)

- for
 * for in
 * for of
- do while
- while
- breack / continue
 - labeled Statements (etiquetar un bloque de codigo)

### G-) Control Flow
+ Flujos de control para determinar el proceso del codigo.
 - if, else
 - Switch
  - Exception Handling
     - throw (Genera errores personales)
     - try (ejecuta bloque de codigo)
     - catch (bloque para manejar el error)
     - finally (bloque que ejecuta con o sin solucion)
     - Utilizing Error Objects (objetos que continen varios tipos de errores)
      - AggregateError
      - EvalError (errores ES5 --> ignorarlos)
      - InternalError (Errores de javascript)
      - RangeError
      - ReferenceError
      - SyntaxError

### H-) Expressions And Operators

**Assignment operators**

Name  | Shorthand | operator Meaning
------------- | -------------
        Assignment     |      x = f()    | x = f()
        Addition         |    x += f()  |  x = x + f()
        Subtraction      |    x -= f()  |  x = x - f()
        Multiplication    |   x *= f() |   x = x * f()
        Division        |     x /= f()  |  x = x / f()
        Remainder     |       x %= f() |   x = x % f()
        Exponentiation   |  x **= f()  | x = x ** f()
        Left shift       |    x <<= f()  | x = x << f()
        Right shift    |      x >>= f()|  x = x >> f()
        Unsigned right shift| x >>>= f() | x = x >>> f()
        Bitwise AND     |     x &= f() |   x = x & f()
        Bitwise XOR    |     x ^= f()  |  x = x ^ f()
        Logical AND     |     x &&= f() |  x && (x = f())
        Nullish coalescing |  x ??= f() |  x ?? (x = f())
        Bitwise OR      |     x l= f()  |  x = x l f()
        Logical OR      |     x ll= f() |  x ll (x = f())

**Comparison operators**

Name  | Example
------------- | -------------
        Equal           |        (==)
        Not equal         |      (!=)
        Strict equal        |    (===)
        Strict not equal     |  (!==)
        Greater than       |     (>)
        Greater than or equal  | (>=)
        Less than       |        (<)
        Less than or equal    |  (<=)

**Arithmetic operators**

Name  | Example
------------- | -------------
        Remainder        |           (%)
        Increment             |      (++)
        Decrement           |        (--)
        Unary negation       |       (-)
        Unary plus         |         (+)
        Exponentiation operator   |  (**)

**Bitwise operators**

Name  | Example
------------- | -------------
        Bitwise AND          |            a & b
        Bitwise OR             |   a l b
        Bitwise XOR          |            a ^ b
        Bitwise NOT         |             ~ a
        Left shift           |            a << b
        Sign-propagating right shift  |  a >> b
        Zero-fill right shift     |       a >>> b

**Logical operators**

Name  | Example
------------- | -------------
        Logical AND   |  (&&)
        Logical OR   |  (ll)
        Logical NOT   |  (l)

### I-) Functions

+ **¿ Parameters, Default Params, Rest Params?**
  - los argumento que le pasas a una funcion
  - valores por defecto, si no llega el argumento
  - pasar varios argumentos (...params)
+ **¿Arrow Functions?**
  - Simples
  - Anonimas
  - Cortas
  - No Vinculantes
+ **¿IIFEs?**
  - IIFE - Immediately-Invoked Function Expression
  - IIFE - Expresión de Función Invocada Inmediatamente
  - Al agregar paréntesis al final de la definición de la función, estás diciendo a JavaScript que ejecute la función justo después de ser definida.
+ **¿Arguments Objects?**
  - 
+ **¿Scope & Function Stack, Recursion, Lexical Scoping, Closures?**
  - Se refiere al alcance de las funciones, las cuales tiene 4
   - global scope
   - module scope
   - function scope
   - block scope

+ **¿Built in Functions?**
  - Son funciones que ya vienen predefinidas en javaScript

### J-) Strict Mode

+ **¿que es Strict Mode?**
  - el uso de modo estricto sive para mejorar el codigo, hacerlo mas robusto. no confundir con ESLINT quien se encarga de hacer el codigo mas legible, organizado y bonito. mientras que el strict es mas funcional logico.

### K-) Using (this) Keyword ___

+ **¿que es this?**
  - sirve para referirce hacia algo y señalar ese algo depende de donde este ubicado.
  - puede ser una variable, objeto, funcion, handlres, etc.

### L-) Asynchronous JavaScript

+ **¿que es Asynchronous?**
  - son procesos en javascript que transcurren uno o varios a la vez.
  - son procesos que pueden no demorar o demoran.
  - son syncronicos(callbacks) o Asyncronicos(promise).

### M-) Working with APIs

+ **¿Que son API?**
  - aplicativos de consumo a travez de endpoints, se puede hacer CRUD con ellos y pasar argumentos adicionales o opciones. como: method y headers.

### N-) Classes

+ **¿que son las clases?**
  - Moldes modelos para crear objetos, existen 5 maneras de crearlos
   - Metodo 1 - construcutor de objetos
   - Metodo 2 - Literal de objetos o inicializador
   - Metodo 3 - Function constructora
   - Metodo 4 - classes de EMSCRIPT 6 -- Estandar que usare
   - Metodo 5 - patron singleton

### Ñ-) Iterators and Generators

+ **¿que son?**
  - Formas para recorrer un objeto

### O-) Modules in JavaScript

+ **¿que son?**
  - librerias que se imvocan en javascript. existen varios estandares para llamarlas

### P-) Memory Management

+ **¿que son?**
  - javascript tiene adminsitraicon de memoria actomatica y eso ahce creer a los programadores que no tienen que preocuparse por ellas. tener cuidado con ello.

### Q-) Using Chrome Dev Tools

+ **¿que son?**
  - herramientas de google dev que sirve para corregir y debuguiar el codigo. encontrar errores etc.

#End