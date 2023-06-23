import { constantRegexp } from '../../../config/regexp/regexp';

const validationMainOperators = expression =>
  !constantRegexp.validationMainOperators.test(expression);

export default validationMainOperators;
