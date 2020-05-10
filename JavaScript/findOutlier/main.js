function findOutlier(array) {
  const odd = []
  const even = []
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
      odd.push(array[i])
    }
    else {
      even.push(array[i])
    }
  }
  return (odd.length === 1) ? odd[0] : even[0]
}

console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([0,0,3,0,0]));
