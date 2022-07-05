const nullVariable = null;
const emptyString = '';
const undefinedVariable = undefined;
const number = 5.404;
const stringGood = 'Good';

function sum(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

function getObject() {
  return { passed: true, count: 1, string: 'ok' };
}

function getArray() {
  return [1, { color: 'red' }, null];
}

function functionWithThrow() {
  throw new Error('User error');
}
export {
  nullVariable,
  emptyString,
  undefinedVariable,
  number,
  stringGood,
  sum,
  getObject,
  getArray,
  functionWithThrow,
};
