'use strict'

const SIZEWORLD = 10
const asciiLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const asciiUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const hexdigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F']
const octdigits = ['0', '1', '2', '3', '4', '5', '6', '7']
const punctuation = ['!', '#', '$', ' % ', ' & ', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '"']

function generateAsciiLowercase (ziseWord) {
  let result = ''
  for (let i = 0; i <= ziseWord; i++) {
    result += asciiLowercase[Math.floor(Math.random() * asciiLowercase.length)]
  }
  return result
}

function generateAsciiUppercase (ziseWord) {
  let result = ''
  for (let i = 0; i <= ziseWord; i++) {
    result += asciiUppercase[Math.floor(Math.random() * asciiUppercase.length)]
  }
  return result
}

function generatePunctuation (ziseWord) {
  let result = ''
  for (let i = 0; i <= ziseWord; i++) {
    result += punctuation[Math.floor(Math.random() * punctuation.length)]
  }
  return result
}

function generateHexdigits (ziseWord) {
  let result = ''
  for (let i = 0; i <= ziseWord; i++) {
    result += hexdigits[Math.floor(Math.random() * hexdigits.length)]
  }
  return result
}

function generateOctdigits (ziseWord) {
  let result = ''
  for (let i = 0; i <= ziseWord; i++) {
    result += octdigits[Math.floor(Math.random() * octdigits.length)]
  }
  return result
}

function generateDigits (ziseWord) {
  let result = ''
  for (let i = 0; i <= ziseWord; i++) {
    result += digits[Math.floor(Math.random() * digits.length)]
  }
  return result
}

console.log('// ----- // ----- // ----- // ----- // ----- // ----- //')
console.log(
  generateAsciiLowercase(SIZEWORLD),
  generateAsciiUppercase(SIZEWORLD),
  generatePunctuation(SIZEWORLD),
  generateHexdigits(SIZEWORLD),
  generateOctdigits(SIZEWORLD),
  generateDigits(SIZEWORLD)
)
console.log('// ----- // ----- // ----- // ----- // ----- // ----- //')
