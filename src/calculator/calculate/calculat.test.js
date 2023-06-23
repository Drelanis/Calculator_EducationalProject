import calculate from './calculate.js';

it('checking the basic logic of calculating mathematical expressions', () => {
  expect(calculate('')).toEqual(0);
  expect(calculate('2')).toEqual(2);
  expect(calculate('-2')).toEqual(-2);
  expect(calculate('-(-5)')).toEqual(5);
  expect(calculate('2+3')).toEqual(5);
  expect(calculate('4-2')).toEqual(2);
  expect(calculate('2*3')).toEqual(6);
  expect(calculate('10/2')).toEqual(5);
  expect(calculate('2+3*4')).toEqual(14);
  expect(calculate('(2+3)*4')).toEqual(20);
  expect(calculate('((2 + 3) * 4 - 1 + 5) / 2')).toEqual(12);
  expect(calculate('(((2 + 3) * 4 - 1 + 5) / 2) + (1*(-(-(1)))')).toEqual(13);
});
