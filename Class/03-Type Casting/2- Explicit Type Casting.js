/**
    "Type Casting" (o conversión de tipo) se refiere a la transferencia de datos de un tipo de dato a
        otro. Esto es común en la programación cuando trabajas con diferentes tipos de datos y
        necesitas asegurarte de que los datos se encuentren en el formato adecuado para realizar
        ciertas operaciones.

    Conversión explícita: A veces, necesitas realizar una conversión de tipo de forma explícita,
        ya que la conversión automática no funciona como esperabas. Esto se conoce como
        "conversión explícita" y generalmente implica el uso de funciones o expresiones que
        permiten al programador definir cómo se debe realizar la conversión.

**/

// Ejemplo de conversión explícita en JavaScript:

let numero = 5;
let cadena = "10";
let numeroConvertido = Number(cadena); // Conversión explícita de la cadena a número.
let resultado = numero + numeroConvertido; // Ahora podemos sumar los dos números.
console.log(resultado); // Resultado: 15 (un número)

/**
    La conversión de tipo es importante para garantizar que los datos se utilicen de la manera
        correcta en una aplicación. Al comprender cuándo y cómo se realizan las conversiones de
        tipo, puedes evitar errores y asegurarte de que tus operaciones se comporten de la forma
        esperada.
**/