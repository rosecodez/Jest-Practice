const caesarCipher = require('./caesarCipher');

test('take a string and a shift factor and return it with each character shifted', () => {
  expect(caesarCipher('cats please')).toBe('FDWVSOHDVH');
});
