import {
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
} from './index';

describe('Index test', () => {
  test('Variable test', () => {
    expect(nullVariable).toBeNull();
    expect(number).toBeDefined();
    expect(undefinedVariable).toBeUndefined();
    expect(emptyString).toBeFalsy();
    expect(number).toBeTruthy();
    expect(number).toBeGreaterThan(3);
    expect(number).toBeLessThan(7);
    expect(number).toBeGreaterThanOrEqual(5.404);
    expect(number).toBeLessThanOrEqual(5.404);
    expect(number).toBeCloseTo(5.4);
    expect(stringGood).toMatch(/o+/);
  });
});

describe('Index test', () => {
  test('Function test', () => {
    expect(sum(1)).toBe(1);
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2, 3)).toBe(6);
    expect(sum(2, 2)).toBe(4);
  });
});

describe('Index test', () => {
  test('Object test', () => {
    expect(getObject()).toEqual({ passed: true, count: 1, string: 'ok' });
    expect(getObject()).toHaveProperty('passed');
    expect(getObject()).toHaveProperty('passed', true);
  });
});

describe('Index test', () => {
  test('Array test', () => {
    expect(getArray()).toContain(1);
    expect(getArray()).toContainEqual({ color: 'red' });
    expect(getArray()).toHaveLength(3);
    expect(getArray()).not.toEqual({});
    expect(getArray).not.toThrow();
  });
});

describe('Index test', () => {
  test('Throw error test', () => {
    expect(functionWithThrow).toThrow();
    expect(functionWithThrow).toThrow(Error);
    expect(functionWithThrow).toThrow('User error');
    expect(functionWithThrow).toThrow(/user/i);
  });
});

describe('Index test', () => {
  test('Class Test', () => {
    expect(new Test()).toBeInstanceOf(Test);
    expect(new Test().name).toBe('test');
    expect(new Test('other').name).toBe('other');
  });
});

describe('Index test', () => {
  test('Callback function test', done => {
    functionCallback('test', str => {
      expect(str).toBe('TEST');
      done();
    });
  });
});

describe('Index test', () => {
  test('Promise test', () => {
    functionPromise('TEST').then(str => {
      expect(str).toBe('test');
    });
    functionPromise('').catch(e => {
      expect(e).toMatch('Error');
    });
  });
});

describe('Index test', () => {
  test('Async test', async () => {
    const string = await functionPromise('TEST');
    expect(string).toBe('test');
  });
});

afterAll(() => {
  'Before running all the tests';
});

beforeEach(() => {
  'Before each test run';
});

afterEach(() => {
  'After each test run';
});

afterAll(() => {
  'After all the tests have been completed';
});
