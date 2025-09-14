function getFirstChar(str, times) {
  let finalstr = str;

  for (let i = 1; i < times; i += 1) {
    finalstr += str;
  }

  return finalstr;
}

console.log(getFirstChar('A', 5));
