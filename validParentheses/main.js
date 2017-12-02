// validParentheses takes string of Parentheses,
// checks if the order is valid and returns boolean.
// Divide initial string by 2, replace each with empty string,
// if result matches to empty string return true.

function validParentheses(string) {
  const divided = string.length / 2
  for(let i = 0; i < divided; i++) {
    string = string.replace('()', '')
  }
  return string == ''
}

console.log(validParentheses( "()" ));
