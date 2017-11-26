// convertToRoman takes a number as argument,
// converts the number to roman numeral and returns it.
// create arrays containing number and roman numeral,
// split the initial number and replace with roman,
// join them and return. **Had to see the solution**

function convertToRoman(number) {
  const decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]
  const roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
  let result = ''
  for(let i = 0; i <= decimal.length; i++) {
    while(decimal[i] <= number) {
      result += roman[i]
      number -= decimal[i]
    }
  }
  return result
}

console.log(convertToRoman(36))
console.log(convertToRoman(1023))
