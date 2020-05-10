// As a step towards achieving this; you have decided to
// create a function that will produce a multi-dimensional array
//out of the hit count value. Each inner dimension of the
// array represents an individual digit in the hit count,
// and will include all numbers that come before it, going back to 0.

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
