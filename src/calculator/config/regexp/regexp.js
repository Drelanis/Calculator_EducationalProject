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

const isIdentifierCreater = functions => {
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
  return new RegExp(`(${regexpString})(\\d+(\\.\\d+)?|\\[-?\\d+(\\.\\d+)?\\])`);
};

const createdRegexp = {
  isConstanse: isConstanse(extraConstance),
  isUnaryRegexp: isIdentifierCreater(unaryFunctions),
};

export { constantRegexp, createdRegexp };
