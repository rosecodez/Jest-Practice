/* eslint-disable no-plusplus */
function caesarCipher(string) {
  const plainText = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const cipherText = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C'];
  const caesarShift = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < plainText.length; j++) {
      if (string[i] === plainText[j]) {
        caesarShift.push(cipherText[j]);
      }
    }
  }
  return caesarShift.join('');
}
console.log(caesarCipher('cats please'));
module.exports = caesarCipher;
