import { extraOperationsBinary, extraOperationsUnary } from '../extraOperations/extraOperations';
import operations from '../operations/operations';

const mainFunctions = {};

const unaryFunctions = {};

const addMainFunctions = (operations, mainFunctions) => {
  Object.values(operations).forEach(operation => {
    if (operation.customAction || operation.inputAction) return;
    mainFunctions[operation.content] = operation.action;
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

const addExtraBinaryFunctions = (extraFunctions, functions) => {
  Object.values(extraFunctions).forEach(element => {
    const [content, action] = Object.values(element);
    functions[content] = action;
  });
};

addMainFunctions(operations, mainFunctions);
addExtraBinaryFunctions(extraOperationsBinary, mainFunctions);
addExtraUnaryFunctions(extraOperationsUnary, unaryFunctions);

export { unaryFunctions, mainFunctions };
