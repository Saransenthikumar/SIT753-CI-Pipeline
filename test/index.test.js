const greet = require('../index');

test('greets the user', () => {
  expect(greet('Saran')).toBe('Hello, Saran!');
});
