import { createdRegexp } from '../../config/regexp/regexp';

const validationUnaryExpressions = expression =>
  expression.match(createdRegexp.isUnaryExressionValidation);

export default validationUnaryExpressions;
