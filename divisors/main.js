// Create a function named divisors/Divisors that takes
// an integer and returns an array with all of the integer's
// divisors(except for 1 and the number itself).
// If the number is prime return the string '(integer) is prime'

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

function divisors(number) {
  if(isPrime(number)) return number + ' is prime'
  let result = []
  for(let i = 2; i < number; i++) {
    if(number % i === 0) {
      result.push(i)
    }
  }
  return result
}

console.log(divisors(13));
