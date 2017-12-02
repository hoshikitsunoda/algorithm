// uniteUnique takes two or more arrays as parameter,
// returns a new array of unique vaues in the order of the
// original provided arrays.
// Create an empty array variable,
// Use arguments object then loop through each argument,
// then push the result.
//
// function uniteUnique(...array) {
//   const result = []
//   for(let i = 0; i < arguments.length; i++) {
//     const newArray = arguments[i]
//     for(let j = 0; j < newArray.length; j++) {
//       const index = newArray[j]
//       if(result.indexOf(index) < 0) {
//         result.push(index)
//       }
//     }
//   }
//   return result
// }
//
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
// console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]))

function counterEffect(hitCount) {
 const split = hitCount.split('')
 const result = []
 for(let i = 0; i < split.length; i++) {
   const temp = []
   for(let j = 0; j <= Number(split[i]); j++) {
     temp.push(j)
   }
   result.push(temp)
 }
 return result
}

console.log(counterEffect("1250"));
