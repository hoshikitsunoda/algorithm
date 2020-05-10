const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number)

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
