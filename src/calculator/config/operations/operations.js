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
    action: (firstOperand, secondOperand) => {
      return firstOperand / secondOperand;
    },
  },
  multiplication: {
    content: '*',
    action: (firstOperand, secondOperand) => {
      return firstOperand * secondOperand;
    },
  },
  subtraction: {
    content: '-',
    action: (firstOperand, secondOperand) => {
      return firstOperand - secondOperand;
    },
  },
  addition: {
    content: '+',
    action: (firstOperand, secondOperand) => {
      return firstOperand + secondOperand;
    },
  },
  equal: {
    content: '=',
    customAction: true,
  },
};

export default operations;
