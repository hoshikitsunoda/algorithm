function validParentheses(string) {
  const divided = string.length / 2
  for(let i = 0; i < divided; i++) {
    string = string.replace('()', '')
  }
  return string == ''
}

console.log(validParentheses( "()" ));
