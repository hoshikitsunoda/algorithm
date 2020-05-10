// findOdd takes an array, find the integer that appears
// odd number of times then returns it.
// loop through the array then loop again inside, if
// both array index matches count up. If the count can't be
// devided by 2 then return.

function findOdd(array) {
  let count = 0
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(array[i] === array[j]) {
        count++
      }
    }
    if(count % 2 !== 0) {
      return array[i]
    }
  }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
