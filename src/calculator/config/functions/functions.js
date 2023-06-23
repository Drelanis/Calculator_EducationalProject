import {
  extraConstance,
  extraOperationsBinary,
  extraOperationsUnary,
} from '../extraOperations/extraOperations';
import operations from '../operations/operations';

const mainFunctions = {};

const unaryFunctions = {};

const addMainFunctions = (operations, mainFunctions) => {
  Object.values(operations).forEach(operation => {
    if (operation.customAction || operation.inputAction) return;
    mainFunctions[operation.content] = {
      precedence: operation.precedence,
      operation: operation.operation,
    };
  });
};

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

addMainFunctions(operations, mainFunctions);
addMainFunctions(extraOperationsBinary, mainFunctions);
addExtraUnaryFunctions(extraOperationsUnary, unaryFunctions);
addExtraUnaryFunctions(extraConstance, unaryFunctions);

export { unaryFunctions, mainFunctions };
