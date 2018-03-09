function convertHTML(str) {
  const split = str.split('')
  for(let i = 0; i < split.length; i++) {
    switch (split[i]) {
      case '<':
        split[i] = '&lt;';
        break;
      case '&':
        split[i] = '&amp;';
        break;
      case '>':
        split[i] = '&gt;';
        break;
      case '"':
        split[i] = '&quot;';
        break;
      case "'":
        split[i] = "&apos;";
        break;
    }
  }
  return split.join('')
}

// function convertHTML(str) {
//   var entities = {
//     '&': '&amp;',
//     '<': '&lt;',
//     '>': '&gt;',
//     '"': '&quot;',
//     '\'': '&apos;'
//   };
//   for(var i in entities) {
//     var before = i;
//     var after = entities[i];
//     var pattern = new RegExp(before, 'g');
//     str = str.replace(pattern, after);
//   }
//   return str;
// }

module.exports = convertHTML
