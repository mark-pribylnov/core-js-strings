function removeLastOccurrences(str, value) {
  if (!str.includes(value)) return str;
  const indexStart = str.lastIndexOf(value);
  const indexEnd = indexStart + value.length;
  const strBeforeValue = str.slice(0, indexStart);
  const strAfterValue = str.slice(indexEnd);
  const finalStr = strBeforeValue + strAfterValue;

  return finalStr;
}

console.log(removeLastOccurrences('The quick brown fox', 'dog'));

// function getFirstChar(str) {
//   let sum = 0;
//   console.log(str.split(''));

//   str.split('').forEach((item) => {
//     sum += item.charCodeAt(0);
//   });

//   return sum;
// }

// console.log(getFirstChar('Aaagag'));
