function reverseString(string) {
  return string.split('').reverse().join('');
}
console.log(reverseString('cat'));
module.exports = reverseString;
