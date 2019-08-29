const multiple3or5 = num => {
  const newArray = []
  for (let i = 0; i < num; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      newArray.push(i)
    }
  }
  return newArray.reduce((a, b) => a + b, 0)
}

module.exports = multiple3or5
