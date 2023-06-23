import './view/styles/index.scss';
import CalculatorView from './view/calculatorView/CalculatorView';
import calculate from './calculator/calculate/calculate';
import Model from './model/Model';

const model = new Model();
new CalculatorView(model);

const tests = [
  { number: 1, input: '', expected: 0 },
  { number: 2, input: '2', expected: 2 },
  { number: 3, input: '-2', expected: -2 },
  { number: 6, input: '-(-5)', expected: 5 },
  { number: 7, input: 'π', expected: Math.PI },
  { number: 8, input: 'e', expected: Math.E },
  { number: 9, input: '2 + 3', expected: 5 },
  { number: 10, input: '4 - 2', expected: 2 },
  { number: 11, input: '2 * 3', expected: 6 },
  { number: 12, input: '10 / 2', expected: 5 },
  { number: 13, input: 'sin(0)', expected: 0 },
  { number: 14, input: 'cos(0)', expected: 1 },
  { number: 15, input: 'tan(0)', expected: 0 },
  { number: 16, input: '!(0)', expected: 1 },
  { number: 17, input: '!(5)', expected: 120 },
  { number: 18, input: '√(4)', expected: 2 },
  { number: 19, input: '2 + 3 * 4', expected: 14 },
  { number: 20, input: '(2 + 3) * 4', expected: 20 },
  { number: 21, input: 'sin(π/2)', expected: 1 },
  { number: 22, input: 'cos(π)', expected: -1 },
  { number: 23, input: 'tan(0)', expected: 0 },
  { number: 24, input: '!(4 + 1)', expected: 120 },
  { number: 25, input: '√(9 + 16)', expected: 5 },
  { number: 26, input: 'sin(0) + cos(0)', expected: 1 },
  { number: 27, input: '!(2) * 4', expected: 8 },
  { number: 28, input: '√(2 * 2)', expected: 2 },
  { number: 29, input: 'tan(π/4) * ctn(π/4)', expected: 1 },
  { number: 30, input: '!(4 + 1) - 2', expected: 118 },
  { number: 31, input: '√(9 + 16) / 2', expected: 2.5 },
  { number: 32, input: 'sin(0) + cos(0) * 2', expected: 2 },
  { number: 33, input: '!(2 + 2) * 4 - 1', expected: 95 },
  { number: 34, input: '√(2 * 2) + 3', expected: 5 },
  { number: 35, input: 'sin(π/2) - 1', expected: 0 },
  { number: 36, input: 'tan(π/4) * ctn(π/4) + 2', expected: 3 },
  { number: 37, input: '2 * !(4 + 1)', expected: 240 },
  { number: 38, input: '√(9 + 16) / 2 - 1', expected: 1.5 },
  { number: 39, input: 'sin(0) + cos(0) * 2 + 1', expected: 3 },
  { number: 40, input: '2 * sin(π/6) - 1 + 2', expected: 2 },
  { number: 41, input: '!(4) * 2 - 1 + 5', expected: 52 },
  { number: 42, input: '√(2 * 2) + 3 * 2', expected: 8 },
  { number: 51, input: '((2 + 3) * 4 - 1 + 5) / 2', expected: 12 },
  { number: 52, input: '(((2 + 3) * 4 - 1 + 5) / 2) + 1', expected: 13 },
  { number: 53, input: '((((2 + 3) * 4 - 1 + 5) / 2) + 1) - 2', expected: 11 },
  {
    number: 54,
    input: '((((2 + 3) * 4 - 1 + 5) / (!(3)-(-5)*(-1)) + 1) - 2',
    expected: 23,
  },
  {
    number: 55,
    input: '√(3*(-3))',
    expected: 0,
  },
];

tests.forEach(test => {
  const result = Number(calculate(test.input));
  console.log(`Test ${test.number}: ${result === test.expected ? 'passed' : 'failed'}`);
});
