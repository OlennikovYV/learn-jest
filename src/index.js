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

class Test {
  constructor(name) {
    this.name = name || 'test';
  }
}

function functionCallback(string, callback) {
  callback(string.toUpperCase());
}

function functionPromise(string) {
  return new Promise((resolve, reject) => {
    if (!string) reject('Error');
    resolve(string.toLowerCase());
  });
}

function functionWithoutTest1() {}
function functionWithoutTest2() {}
function functionWithoutTest3() {}
function functionWithoutTest4() {}
function functionWithoutTest5() {}

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
  Test,
  functionCallback,
  functionPromise,
};
