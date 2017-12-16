function validBraces(string) {
  const regex = /\(\)|\[\]|\{\}/g

  return (string.replace(regex, '')) ? true : false
}

console.log(validBraces("()"));
console.log(validBraces("(){}[]"));
