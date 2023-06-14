const operations = {
  alternatingCurrent: {
    content: 'AC',
    customAction: true,
  },
  openBracket: {
    content: '(',
  },
  closeBracket: {
    content: ')',
  },
  division: {
    content: '/',
    precedence: 2,
    operation: (firstOperand, secondOperand) => firstOperand / secondOperand,
  },
  multiplication: {
    content: '*',
    precedence: 2,
    operation: (firstOperand, secondOperand) => firstOperand * secondOperand,
  },
  subtraction: {
    content: '-',
    precedence: 1,
    operation: (firstOperand, secondOperand) => firstOperand - secondOperand,
  },
  addition: {
    content: '+',
    precedence: 1,
    operation: (firstOperand, secondOperand) => firstOperand + secondOperand,
  },
  equal: {
    content: '=',
    customAction: true,
  },
};

export default operations;
