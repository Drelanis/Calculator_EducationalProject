import { unaryFunctions } from '../../config/functions/functions';
import { createdRegexp } from '../../config/regexp/regexp';

const findConstants = expression => {
  while (createdRegexp.isConstanse.test(expression)) {
    const innerSymbol = expression.match(createdRegexp.isConstanse)[0];
    const innerResult = unaryFunctions[innerSymbol]();
    expression = expression.replace(`${innerSymbol}`, `${innerResult}`);
  }
  return expression;
};

export default findConstants;
