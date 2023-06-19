const validationBrackets = expression => {
  const bracketsStack = [];
  const bracketRegex = /\(|\)/g;
  const bracketes = expression.match(bracketRegex) || [];
  for (let index = 0; index < bracketes.length; index += 1) {
    if (bracketes[index] == '(') {
      bracketsStack.push(')');
    } else if (bracketsStack.pop() !== bracketes[index]) {
      return false;
    }
  }
  return bracketsStack.length === 0;
};

export default validationBrackets;
