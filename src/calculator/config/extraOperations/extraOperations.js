const extraOperationsBinary = {
  remainderOfTheDivision: {
    content: '%',
    action: (firstOperand, secondOperand) => firstOperand % secondOperand,
  },
  degree: {
    content: '^',
    action: (firstOperand, secondOperand) => Math.pow(firstOperand, secondOperand),
  },
};

const extraOperationsUnary = {
  doubleBrackets: {
    content: '()',
  },
  rootOfNumber: {
    content: '√',
    sqrt: Math.sqrt,
  },
  factorial: {
    content: '!',
    fact: number => {
      let result = 1;
      for (let index = 2; index <= number; index += 1) {
        result *= index;
      }
      return result;
    },
  },
  sinus: {
    content: 'sin()',
    sin: Math.sin,
  },
  cosinus: {
    content: 'cos()',
    cos: Math.cos,
  },
  tangent: {
    content: 'tan()',
    tan: Math.tan,
  },
  cotangent: {
    content: 'ctn()',
    ctn: number => 1 / Math.tan(number),
  },
  hyperbolicCosinus: {
    content: 'cosh()',
    sinh: Math.sinh,
  },
  hyperbolicSinus: {
    content: 'sinh()',
    cosh: Math.cosh,
  },
  hyperbolicTangent: {
    content: 'tanh()',
    tanh: Math.tanh,
  },
  hyperbolicCotangent: {
    content: 'ctnh()',
    ctnh: number => 1 / Math.tanh(number),
  },
  exponent: {
    content: 'exp()',
    exp: Math.exp,
  },
  module: {
    content: 'abs()',
    abs: Math.abs,
  },
  logarithm: {
    content: 'log()',
    log: Math.log,
  },
};

export { extraOperationsUnary, extraOperationsBinary };
