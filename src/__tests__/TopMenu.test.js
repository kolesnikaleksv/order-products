import '@testing-library/jest-dom/extend-expect';

const literallyJustDateNow = () => Date.now();

test('It should call and return Date.now()', () => {
  const realDateNow = Date.now.bind(global.Date);
  const dateNowStub = jest.fn(() => 1530518207007);
  global.Date.now = dateNowStub;

  expect(literallyJustDateNow()).toBe(1530518207007);
  expect(dateNowStub).toHaveBeenCalled();

  global.Date.now = realDateNow;
});