// diffArray takes two arrays as arguments,
// returns any items that is not common between the arrays.
// if inputs are ([1, 2, 3, 5], [1, 2, 3, 4, 5]),
// should return 4.
// Set a new empty array, combine both arrays passed in,
// filter it out and return the number that is not included.

function diffArray(array1, array2) {
  const newArray = []
  const combined = array1.concat(array2)
  combined.filter(number => {
    if(!array1.includes(number) || !array2.includes(number)) {
      newArray.push(number)
    }
  })
  return newArray
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
