// write a function that checks if a number is a prime number.

function isPrime(number) {
  for(let i = 2; i < number; i++) {
    if(number % i === 0)
      return false
  }
  return number !== 1
}

console.log(isPrime(137));
console.log(isPrime(237));
