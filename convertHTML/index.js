function convertHTML(str) {
  var entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  };
  for(var i in entities) {
    var before = i;
    var after = entities[i];
    var pattern = new RegExp(before, 'g');
    str = str.replace(pattern, after);
  }
  return str;
}

module.exports = convertHTML
