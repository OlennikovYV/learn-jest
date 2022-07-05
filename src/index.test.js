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
} from './index';

describe('Index test', () => {
  test('Test variable', () => {
    expect(nullVariable).toBeNull();
    expect(emptyString).toBeFalsy();
    expect(undefinedVariable).toBeUndefined();
    expect(number).toBeTruthy();
    expect(number).toBeGreaterThan(3);
    expect(number).toBeLessThan(7);
    expect(number).toBeCloseTo(5.4);
    expect(stringGood).toMatch(/o+/);
  });
});

describe('Index test', () => {
  test('Test function sum()', () => {
    expect(sum(1)).toBe(1);
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2, 3)).toBe(6);
    expect(sum(2, 2)).toBe(4);
  });
});

describe('Index test', () => {
  test('getObject', () => {
    expect(getObject()).toEqual({ passed: true, count: 1, string: 'ok' });
  });
});

describe('Index test', () => {
  test('getArray', () => {
    expect(getArray()).toContain(1);
    expect(getArray()).toContainEqual({ color: 'red' });
    expect(getArray()).toHaveLength(3);
    expect(getArray()).not.toEqual({});
    expect(getArray).not.toThrow();
  });
});

describe('Index test', () => {
  test('Throw error', () => {
    expect(functionWithThrow).toThrow();
    expect(functionWithThrow).toThrow(Error);
    expect(functionWithThrow).toThrow('User error');
    expect(functionWithThrow).toThrow(/user/i);
  });
});
