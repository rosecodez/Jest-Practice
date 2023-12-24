const {
  add, subtract, divide, multiply,
} = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
test('subtracts 1 - 1 to equal 0', () => {
  expect(subtract(1, 1)).toBe(0);
});
test('divides 4 / 2 to equal 2', () => {
  expect(divide(4, 2)).toBe(2);
});
test('multiplies 5 * 2 to equal 10', () => {
  expect(multiply(5, 2)).toBe(10);
});
