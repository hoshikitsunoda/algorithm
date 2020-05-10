const missingHTML = (string) => {
    const match = []
    const split = string.split(/[\W_]+/g)
    const given = ['div', 'b', 'p', 'i', 'em']
    for(let i = 0; i < split.length; i++) {
        console.log(split[i])
        for(let j = 0; j < given.length; j++) {
            if(split[i] === given[j]) {
                match.push(split[i])
            }
        }
    }
    return match.length % 2 == 0 
                ? true
                : match.filter((v, i, a) => {
                    console.log(v)
                    return a.indexOf(v) === i * 2
                })
}

module.exports = missingHTML