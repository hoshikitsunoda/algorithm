// Given an array of digitals numbers, return a new array of length number
// containing the last even numbers from the original array (in the same order).

const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number)

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
