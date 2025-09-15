function getFirstChar(str) {
  let sum = 0;
  console.log(str.split(''));

  str.split('').forEach((item) => {
    sum += item.charCodeAt(0);
  });

  return sum;
}

console.log(getFirstChar());
