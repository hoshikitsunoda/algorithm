const meeting = string => {
  const split = string.toUpperCase().split(';')
  const mapped = split.map(name =>
    name
      .split(':')
      .reverse()
      .join(', ')
  )
  const sorted = mapped.sort()
  const result = sorted.join(')(')
  return `(${result})`
}

module.exports = meeting
