/*
    --> A-) All About Variables
            2. Hoisting
*/

/*
    Hoisting refers to the process whereby the interpreter move the declaration.
    of functions, variables, or classes to the top of their scope.
    prior to execution of the code.
*/

// + Recomendación: Declarar primero las funciones y luego invocarlas

// sin hoisting - result undefined - code original
console.log(y)
var y  = 1;

// con hoisting 1 - result undefined - inside of the code
z  = 2;
console.log(z)
var z