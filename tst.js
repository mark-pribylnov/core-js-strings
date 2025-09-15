function getFirstChar(str) {
  function createAlphabet() {
    const alphabetLower = [];
    for (let i = 97; i <= 122; i += 1) {
      alphabetLower.push(String.fromCharCode(i));
    }

    const alphabetUpper = [];
    for (let i = 65; i <= 90; i += 1) {
      alphabetUpper.push(String.fromCharCode(i));
    }

    return [...alphabetUpper, ...alphabetLower];
  }
  const alphabet = createAlphabet();

  const chars = str
    .split('')
    .filter((letter) => alphabet.includes(letter))
    .map((letter) => letter.toLowerCase());

  const charsReversed = chars.slice().reverse();

  return charsReversed.join('') === chars.join('');

  // console.log(charsReversed.join(''));
  // console.log(chars.join(''));

  // const lowerCased = str
  //   .split('')
  //   .map((letter) => letter.toLowerCase())
  //   .join('');

  // const reversedLowerCased = lowerCased.split('').reverse().join('');

  // // console.log(lowerCased);
  // console.log(reversed);
  // // console.log(reversedLowerCased);
}

console.log(getFirstChar('A man, a plan, a canal, Panama!'));

// function getFirstChar(str) {
//   const lowerCased = str
//     .split('')
//     .map((letter) => letter.toLowerCase())
//     .join('');

//   let reversed = str.split('').reverse().join('');
//   const reversedLowerCased = lowerCased.split('').reverse().join('');

//   // console.log(lowerCased);
//   console.log(reversed);
//   // console.log(reversedLowerCased);

//   if ('?!'.includes(reversed[0])) {
//     const splittedReversed = reversed.split('');
//     const shiftedElem = splittedReversed.shift();

//     splittedReversed.push(shiftedElem);

//     splittedReversed[0] = splittedReversed[0].toUpperCase();
//     splittedReversed[splittedReversed.length - 2] =
//       splittedReversed[splittedReversed.length - 2].toLowerCase();

//     reversed = splittedReversed.join('');
//   }
//   console.log(reversed);

//   if (reversed === lowerCased) {
//     return true;
//   }
//   return false;
// }
