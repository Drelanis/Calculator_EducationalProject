import { extraOperationsBinary, extraOperationsUnary } from '../extraOperations/extraOperations';

const mainFunctions = {
  '+': (firstOperand, secondOperand) => {
    return firstOperand + secondOperand;
  },
  '-': (firstOperand, secondOperand) => {
    if (!secondOperand) return -firstOperand;
    return firstOperand - secondOperand;
  },
  '*': (firstOperand, secondOperand) => {
    return firstOperand * secondOperand;
  },
  '/': (firstOperand, secondOperand) => {
    return firstOperand / secondOperand;
  },
};

const unaryFunctions = {};

const addExtraUnaryFunctions = (extraFunctions, functions) => {
  Object.values(extraFunctions).forEach(element => {
    const token = Object.entries(element)[1];
    if (!token) {
      return;
    }
    const [name, action] = token;
    functions[name] = action;
  });
};

const addExtraBinaryFunctions = (extraFunctions, functions) => {
  Object.values(extraFunctions).forEach(element => {
    const [content, action] = Object.values(element);
    functions[content] = action;
  });
};

addExtraBinaryFunctions(extraOperationsBinary, mainFunctions);
addExtraUnaryFunctions(extraOperationsUnary, unaryFunctions);

export { unaryFunctions, mainFunctions };
