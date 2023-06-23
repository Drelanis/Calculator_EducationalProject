import Stack from '../../../stack/Stack.js';
import { mainFunctions } from '../../config/functions/functions.js';
import { constantRegexp } from '../../config/regexp/regexp.js';

const numberStack = new Stack();
const operatorStack = new Stack();

const minusCount = negativeNumber => {
  const minuses = negativeNumber.match(/-/g);
  const minuseCount = minuses.length;
  return minuseCount;
};

const considerMinuses = negativeNumber => {
  const number = negativeNumber.match(constantRegexp.isNumber)[0];
  if (minusCount(negativeNumber) % 2 === 0) {
    return `${number}`;
  }
  return `-${number}`;
};

const createField = exression => {
  exression = exression.replace(/\s/g, '');
  exression = exression.match(constantRegexp.isSymbolCombination) || [];
  exression = exression.map(element => {
    element = element.replace(/\[|\]/g, '');
    if (constantRegexp.isNegative.test(element)) {
      return considerMinuses(element);
    }
    return element;
  });
  return exression;
};

const performOperation = (numberStack, operatorStack) => {
  const operator = operatorStack.pop();
  const secondOperand = numberStack.pop();
  const firstOperand = numberStack.pop();
  const resultOfOperation = mainFunctions[operator].operation(firstOperand, secondOperand);
  return resultOfOperation;
};

const calculateBinaryOperations = expression => {
  numberStack.setEmpty();
  operatorStack.setEmpty();
  const field = createField(expression);
  for (let index = 0; index < field.length; index += 1) {
    let char = field[index];
    if (constantRegexp.isNumber.test(char)) {
      numberStack.push(Number(char));
    }
    if (mainFunctions[char]) {
      while (
        !operatorStack.isEmpty() &&
        mainFunctions[char].precedence <= mainFunctions[operatorStack.peek()].precedence
      ) {
        numberStack.push(performOperation(numberStack, operatorStack));
      }
      operatorStack.push(char);
    }
  }
  while (!operatorStack.isEmpty()) {
    numberStack.push(Number(performOperation(numberStack, operatorStack)));
  }

  return numberStack.pop();
};

export default calculateBinaryOperations;
