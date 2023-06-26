import { extraConstance } from '../extraOperations/extraOperations';
import { unaryFunctions } from '../functions/functions';

const constantRegexp = {
  isOperator: /[+\-*\/\^%=(),]/,
  isNumber: /\d+(\.\d+)?/,
  isDynamicNumber: /[-+]?\d+(\.\d+)?/g,
  isNegative: /^-+\d+(\.\d+)?$/,
  isSymbolCombination: /(\d+\.?\d*)|([+\-*\/\^%])|(\[.+?\])/g,
  negativeNumberInBrackets: /\((-?\d+(\.\d+)?)\)/,
  mostNestedParentheses: /\(([^()]+)\)/g,
  validationMainOperators: /([/*\-+%^]){2}/,
};

const isConstanse = constants => {
  if (!constants) return;
  let regexpString = '';
  Object.values(constants).forEach((element, index) => {
    regexpString += element.content;
    if (Object.keys(constants).length - 1 === index) {
      return;
    }
    regexpString += '|';
  });
  return new RegExp(`(${regexpString})`, 'g');
};
const unaryOperationsCreaterForRegexp = functions => {
  if (!functions) return;
  let regexpString = '';
  Object.keys(functions).forEach((element, index) => {
    element = element.replace(constantRegexp.putSpaces, ' $1 ').trim();
    element = element.replace(constantRegexp.deleteDoubleSpaces, ' ');
    regexpString += element;
    if (Object.keys(functions).length - 1 === index) {
      return;
    }
    regexpString += '|';
  });
  return regexpString;
};

const isIdentifierCreater = functions =>
  new RegExp(
    `(${unaryOperationsCreaterForRegexp(functions)})(\\d+(\\.\\d+)?|\\[-?\\d+(\\.\\d+)?\\])`,
  );

const isUnaryExressionValidation = functions =>
  new RegExp(`(${unaryOperationsCreaterForRegexp(functions)})\\d+(\\.\\d+)?`, 'g');

const createdRegexp = {
  isConstanse: isConstanse(extraConstance),
  isUnaryRegexp: isIdentifierCreater(unaryFunctions),
  isUnaryExressionValidation: isUnaryExressionValidation(unaryFunctions),
};

export { constantRegexp, createdRegexp };
