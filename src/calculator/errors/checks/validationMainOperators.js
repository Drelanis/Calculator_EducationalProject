import { constantRegexp } from '../../config/regexp/regexp.js';

const validationMainOperators = expression =>
  !constantRegexp.validationMainOperators.test(expression);

export default validationMainOperators;
