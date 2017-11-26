// whatIsInAName takes a collection(array of objects) and source(object)
// as arguments, and returns the object matches to source.
// Set an empty array, use for in loop to find the matching one and push.

function whatIsInAName(collection, source) {
  const target = Object.keys(source)
  return collection.filter(item => {
    return target.every(key => {
      return item[key] === source[key]
    })
  })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
