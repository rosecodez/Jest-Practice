const reverseString = require('./reverseString');

test('takes a string and returns it reversed', () => {
  expect(reverseString('cat')).toBe('tac');
});
