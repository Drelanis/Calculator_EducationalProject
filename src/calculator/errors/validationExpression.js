import validationMainOperators from './checks/validationMainOperators';
import validationNumbers from './checks/validationNumbers';
import validationBrackets from './checks/validationBrackets';
import validationUnaryExpressions from './checks/validationUnaryExpressions';

const validationExpression = expression => {
  if (validationUnaryExpressions(expression)) {
    return 'The value of unary expressions must be enclosed in ()';
  }
  if (!validationNumbers(expression)) {
    return 'Check out the syntax of numbers';
  }
  if (!validationMainOperators(expression)) {
    return 'Check out the syntax of operators';
  }
  if (!validationBrackets(expression)) {
    return 'Check the number of brackets';
  }

  return true;
};

export default validationExpression;
