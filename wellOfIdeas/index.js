const wellOfIdeas = array => {
  const goodCount = array.filter(item => item === "good").length
  return goodCount >= 1
    ? goodCount >= 3
      ? "I smell a series!"
      : "Publish!"
    : "Fail!"
}

module.exports = wellOfIdeas
