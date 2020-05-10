function reverseWithRecursion(string) {
  if(string === "") {
    return ""
  }
  else {
    return reverseWithRecursion(string.substr(1)) + string.charAt(0)
  }
}

module.exports = reverseWithRecursion
