const longest = (words) => {
    return words.reduce((a, b) => {
        return a.length > b.length ? a : b
    }).length
}

module.exports = longest