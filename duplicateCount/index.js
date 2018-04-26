const duplicateCount = (string) => {
    const split = string.toLowerCase().split('')
    const duplicates = split.filter((a, b) => {
        console.log(split.indexOf(a))
        return split.indexOf(a) !== b
    })
    return duplicates.filter((letter, position) => {
        return duplicates.indexOf(letter) === position
    }).length
}

module.exports = duplicateCount