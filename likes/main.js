// likes takes array of names, returns a string of sentence,
// 'name likes this'/'name and name like this'.
// Iterate thru the array, check how many names are in array,
// complete the sentence.

function likes(array) {
  if(!array.length) {
    return "no one likes this"
  }
  else if(array.length === 1) {
    return array[0] + " likes this"
  }
  else if(array.length === 2) {
    return array[0] + ' ' + 'and ' + array[1] + " like this"
  }
  else if(array.length === 3) {
    return array[0] + ', ' + array[1] + ' and ' + array[2] + " like this"
  }
  else {
    return array[0] + ', ' + array[1] + ' and ' + (array.length - 2) + ' others like this'
  }
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
