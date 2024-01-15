/*

  los arguemnts params
  tienen el mismo concepto que
  los rest params
  la diferencia es que arguments era la forma antigua
  y rest es una forma mas moderna
  se recomiendo la rest por encima de arguments

*/

function longestString (...array1) {
  let longest = ''
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i]
    }
  }
  return longest
}

longestString()
