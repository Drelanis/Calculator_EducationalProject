import { constantRegexp, createdRegexp } from '../../../config/regexp/regexp';

const validationNumbers = expression => {
  if (!expression) return true;
  let validExpression = true;
  const regexValidNumber = /^(?!0\d|\.\d)\d*(\.\d+)?$/;
  expression = expression.replace(constantRegexp.isFactorial, 'fact($1)');
  expression = expression.replace(constantRegexp.isSqrt, 'sqrt($1)');
  expression = expression.replace(constantRegexp.putSpaces, ' $1 ').trim();
  expression = expression.replace(constantRegexp.deleteDoubleSpaces, ' ');
  expression = expression.replace(createdRegexp.isIdentifier, match => match.replace(/\s/g, ''));
  expression = expression.replace(createdRegexp.isConstans, match => match.replace(/\s/g, ''));
  const numbersOnly = expression.match(/[\d.]+/g) || [];
  if (numbersOnly.length === 0) {
    validExpression = false;
  }
  numbersOnly.forEach(number => {
    if (!regexValidNumber.test(number)) {
      validExpression = false;
    }
  });
  return validExpression;
};

export default validationNumbers;
