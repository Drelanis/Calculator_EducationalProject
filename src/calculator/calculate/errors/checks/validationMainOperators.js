import { createdRegexp } from '../../../config/regexp/regexp';

const validationMainOperators = expression => {
  return !createdRegexp.validationMainOperators.test(expression);
};

export default validationMainOperators;
