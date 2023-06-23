import validationMainOperators from './checks/validationMainOperators';
import validationNumbers from './checks/validationNumbers';
import validationBrackets from './checks/validationBrackets';

const validationExpression = exression => {
  if (!validationNumbers(exression)) {
    return 'Check out the syntax of numbers';
  }
  if (!validationMainOperators(exression)) {
    return 'Check out the syntax of operators';
  }
  if (!validationBrackets(exression)) {
    return 'Check the number of brackets';
  }

  return true;
};

export default validationExpression;
