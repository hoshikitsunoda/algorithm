const iqTest = (numbers) => {
    const split = numbers.split(' ')
    const odd = []
    const even = []
    for(let i = 0; i < split.length; i++) {
        split[i] % 2 !== 0
            ? odd.push(split[i])
            : even.push(split[i])
    }
    return odd.length === 1 ? split.indexOf(odd[0]) + 1 : split.indexOf(even[0]) + 1
}

module.exports = iqTest