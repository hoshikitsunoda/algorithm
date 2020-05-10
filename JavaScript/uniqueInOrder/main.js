function uniqueInOrder(iterable) {
  if(iterable.length==0) return []
  const array=[iterable[0]]
  if(typeof iterable === 'string') iterable=iterable.split('')
  iterable.reduce(function(prev,cur) {
      if(prev!=cur) array.push(cur)
      return cur
  })
  return array
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
