import { extraOperationsUnary } from '../extraOperations/extraOperations';
import numbers from '../numbers/numbers';
import operations from '../operations/operations';

const dataSetting = () => {
  const allowedButtons = [];
  Object.values(operations).forEach(element => {
    allowedButtons.push(element.content);
  });
  Object.values(numbers).forEach(number => {
    allowedButtons.push(number.content);
  });
  Object.values(extraOperationsUnary).forEach(operation => {
    allowedButtons.push(operation.content);
  });

  return allowedButtons;
};

export default dataSetting;
