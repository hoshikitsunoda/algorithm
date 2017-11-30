// multipleOf3Or5 takes number, returns the sum of all the
// multiples of 3 or 5 below the number passed in.

function multipleOf3Or5(number) {
  const multiple = []
  for(let i = 3; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0) {
      multiple.push(i)
    }
  }
  return multiple.reduce((accumulator, current) => {
    return accumulator + current
  }, 0)
}

function multipleOf3Or5Two(number) {
  let sum = 0
  for(let i = 3; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}

console.log(multipleOf3Or5(30))
console.log(multipleOf3Or5Two(10))
