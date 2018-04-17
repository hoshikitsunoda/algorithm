const order = (string) => {
    if (string === '') return ''
    const split = string.split(' ')
    const array = []
    let j = 1;
    for(let i = 0; i < split.length; i++){
        if(split[i].indexOf(j) > -1){
            array.push(split[i]);
            j++;
            i = -1;
        }
    }
    return array.join(' ')
}

module.exports = order