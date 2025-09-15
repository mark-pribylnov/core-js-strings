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
}

console.log(getFirstChar('A man, a plan, a canal, Panama!'));

console.log('hello, world'.split('').join(''));
