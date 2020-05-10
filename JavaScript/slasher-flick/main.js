// slasherFlick takes array and number as argument,
// returns the new array with passed numbers of elements omitted.
// Set new empty array variable, splice off the element at number.

function slasherFlick(array, number) {
  return array.splice(number, array.length)
}

console.log(slasherFlick([1, 2, 3, 4, 5], 3)) // should return [4, 5]
console.log(slasherFlick([1, 2, 3, 4, 5], 6)) // should return []
console.log(slasherFlick([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)) // should return ["cheese", 4]
