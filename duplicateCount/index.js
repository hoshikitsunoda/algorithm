const duplicateCount = (string) => {
    const split = string.toLowerCase().split('')
    const duplicates = []
    for(let i = 0; i < split.length; i++) {
        console.log(split[i])
        if(split[i] === split[i - 1]) {
            console.log(split[i], split[i - 1])
            duplicates.push(split[i])
        }
    }
    return duplicates.length
}

module.exports = duplicateCount