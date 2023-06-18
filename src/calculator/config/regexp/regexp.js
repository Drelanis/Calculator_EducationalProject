import constants from '../constants/constants';
import { unaryFunctions } from '../functions/functions';

const constantRegexp = {
  isOperator: /[+\-*\/\^%=(),]/,
  isNumber: /[0-9]/,
  isFactorial: /!(\d+|\([^)]+\))/g,
  isSqrt: /√(\d+|\([^)]+\))/g,
  putSpaces: /([^[0-9.]{1})/g,
  deleteDoubleSpaces: / {1,}/g,
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
  return new RegExp(`\\b(${regexpString})\\b`, 'g');
};

const createdRegexp = {
  isIdentifier: isIdentifierCreater(unaryFunctions),
  isConstans: isIdentifierCreater(constants),
};

export { constantRegexp, createdRegexp };
