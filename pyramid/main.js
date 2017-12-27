function pyramid(number) {
  let result = ""
  for(let i = 0; i < number; i++) {
    for(let j = 0; j < number-i-1; j++) {
      result += " "
    }
    result += "/"
    for(let j=0; j<i; j++) {
      if (i == number-1) result += "__"
      else result += "  "
    }
    result += "\\\n"
  }
  return result;
}

console.log(pyramid(10));
