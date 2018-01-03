// If the object obj has a property prop, the function removes the property
// from the object and returns true; in all other cases it returns false.

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
