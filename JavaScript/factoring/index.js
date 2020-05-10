function factoring(number) {
  if(number <= 1) {
    return number
  }
  else {
    return (number * factoring(number - 1))
  }
}

module.exports = factoring
