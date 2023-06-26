const operations = {
  alternatingCurrent: {
    content: 'AC',
    customAction: true,
  },
  openBracket: {
    content: '(',
    inputAction: true,
  },
  closeBracket: {
    content: ')',
    inputAction: true,
  },
  division: {
    content: '/',
    precedence: 2,
    operation: (firstOperand, secondOperand) => {
      return firstOperand / secondOperand;
    },
  },
  multiplication: {
    content: '*',
    precedence: 2,
    operation: (firstOperand, secondOperand) => {
      return firstOperand * secondOperand;
    },
  },
  subtraction: {
    content: '-',
    precedence: 1,
    operation: (firstOperand, secondOperand) => {
      console.log(secondOperand);
      if (!secondOperand & (secondOperand !== 0)) return -firstOperand;
      return firstOperand - secondOperand;
    },
  },
  addition: {
    content: '+',
    precedence: 1,
    operation: (firstOperand, secondOperand) => {
      return firstOperand + secondOperand;
    },
  },
  equal: {
    content: '=',
    customAction: true,
  },
};

export default operations;
