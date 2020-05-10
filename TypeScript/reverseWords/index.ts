function reverseWords(str: string): string {
  return str
    .split(' ')
    .map((word: string): string => word.split('').reverse().join(''))
    .join(' ')
}

console.log(reverseWords('apple'))
