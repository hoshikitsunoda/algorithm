function removeProperty(obj, prop) {
  if(prop in obj) {
    delete obj[prop]
    return true
  }
  else {
    return false
  }
}

var obj= {
  name: 'shiru'
}

console.log(removeProperty(obj, 'name'))
