const encryptThis = (str: string): string => {
  if (str === '') return ''
  const splitted: string[] = str.split(' ')
  return splitted
    .map((item: string) => {
      const firstLetterAscii: number = item.substring(0, 1).charCodeAt(0)
      const split: any = item.substring(1).split('')
      let temp: string = ''
      temp = split[0]
      split[0] = split[split.length - 1]
      split[split.length - 1] = temp
      item = firstLetterAscii + split.join('')
      return item
    })
    .join(' ')
}

console.log(encryptThis('A wise old owl lived in an oak'))
