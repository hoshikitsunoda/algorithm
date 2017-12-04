function inArray(array1, array2) {
  var result = [];

  outer: for (j = 0; j < array1.length; j++) {
      for (i = 0; i < array2.length; i++) {
          if (array2[i].includes(array1[j])) {
              result.push(array1[j]);
              continue outer;
          }
      }
  }
  return result.sort();
}

function inArray2(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}

console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
