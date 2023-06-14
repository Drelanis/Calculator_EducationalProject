const extraOperations = {
  cosinus: {
    content: 'cos()',
    precedence: 3,
    operation: operand => Math.cos(operand),
  },
  sinus: {
    content: 'sin()',
    precedence: 3,
    operation: operand => Math.sin(operand),
  },
};

export default extraOperations;
