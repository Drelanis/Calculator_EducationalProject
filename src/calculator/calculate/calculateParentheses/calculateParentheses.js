import { unaryFunctions } from '../../config/functions/functions';
import { constantRegexp, createdRegexp } from '../../config/regexp/regexp';
import calculateBinaryOperations from '../calculateBinaryOperations/calculateBinaryOperations';

const calculateParentheses = expression => {
  while (expression.match(constantRegexp.mostNestedParentheses)) {
    const matches = constantRegexp.mostNestedParentheses.exec(expression);
    const innerExpression = matches[1];
    if (matches[0].match(constantRegexp.negativeNumberInBrackets)) {
      expression = expression.replace(`(${innerExpression})`, `[${innerExpression}]`);
    }
    let innerResult = calculateBinaryOperations(innerExpression);
    if (innerResult < 0) innerResult = `[${innerResult}]`;
    expression = expression.replace(`(${innerExpression})`, innerResult);
    if (expression.match(createdRegexp.isUnaryRegexp)) {
      const innerUnaryExpression = expression.match(createdRegexp.isUnaryRegexp);
      const unaryValue = innerUnaryExpression[2].match(constantRegexp.isDynamicNumber)[0];
      const unaryAction = innerUnaryExpression[1];
      const unaryResult = unaryFunctions[unaryAction](unaryValue);
      expression = expression.replace(`${innerUnaryExpression[0]}`, `(${unaryResult})`);
    }
  }
  return expression;
};

export default calculateParentheses;
