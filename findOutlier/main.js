// findOutlier takes an array of either all odd or all even
// integers exept one N, find N and return.
// Create odd and even empty array, for loop thru the initial array,
// if array[i] is odd push to odd, else to even.

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
