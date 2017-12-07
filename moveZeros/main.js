// moveZeros takes an array, finds 0s and adds them to the end of array.
// The rest of elements order is preserved.
// const two empty array variables. For loop and push 0 to one array,
// the rest to another array. concat both arrays.

function moveZeros(array) {
  const popped = []
  const remainder = []
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 0) {
      popped.push(array[i])
    }
    else {
      remainder.push(array[i])
    }
  }
  return remainder.concat(popped)
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
