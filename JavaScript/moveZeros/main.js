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
