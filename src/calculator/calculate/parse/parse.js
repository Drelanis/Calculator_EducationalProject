const symbols = {};

const createSymbol = (id, leftPrecedence, nullDenotativeFunction, leftDenotativeFunction) => {
  if (!symbols[id]) {
    symbols[id] = {
      leftPrecedence,
      nullDenotativeFunction,
      leftDenotativeFunction,
    };
  } else {
    if (nullDenotativeFunction) symbols[id].nullDenotativeFunction = nullDenotativeFunction;
    if (leftDenotativeFunction) symbols[id].leftDenotativeFunction = leftDenotativeFunction;
    if (leftPrecedence) symbols[id].leftPrecedence = leftPrecedence;
  }
};

createSymbol(',');
createSymbol(')');
createSymbol('(end)');

const interpretToken = token => {
  const symbol = { ...symbols[token.type] };
  symbol.type = token.type;
  symbol.value = token.value;
  return symbol;
};

const parse = tokens => {
  let position = 0;
  const getNextPosition = currentPosition => {
    position = currentPosition + 1;
    return interpretToken(tokens[position]);
  };

  const expression = rightPrecedence => {
    let left;
    let token = interpretToken(tokens[position]);
    getNextPosition(position);
    if (!token.nullDenotativeFunction) throw new Error(`Unexpected token: ${token.type}`);
    left = token.nullDenotativeFunction(token);
    while (rightPrecedence < interpretToken(tokens[position]).leftPrecedence) {
      token = interpretToken(tokens[position]);
      getNextPosition(position);
      if (!token.leftDenotativeFunction) throw new Error(`Unexpected token: ${token.type}`);
      left = token.leftDenotativeFunction(left);
    }
    return left;
  };

  const infix = (id, leftPrecedence, rightPrecedence = leftPrecedence, leftDenotativeFunction) => {
    createSymbol(
      id,
      leftPrecedence,
      null,
      leftDenotativeFunction ||
        (left => ({
          type: id,
          left,
          right: expression(rightPrecedence),
        })),
    );
  };

  const prefix = (id, rightPrecedence, nullDenotativeFunction) => {
    createSymbol(
      id,
      null,
      nullDenotativeFunction ||
        (() => ({
          type: id,
          right: expression(rightPrecedence),
        })),
    );
  };

  const isIdentifier = identifier => {
    if (interpretToken(tokens[position]).type !== '(') {
      return identifier;
    }
    const args = [];
    if (tokens[position + 1].type === ')') {
      getNextPosition(position);
    } else {
      do {
        getNextPosition(position);
        args.push(expression(2));
      } while (interpretToken(tokens[position]).type === ',');
      if (interpretToken(tokens[position]).type !== ')') {
        throw new Error("Expected closing parenthesis ')'");
      }
    }
    getNextPosition(position);
    return {
      type: 'call',
      args: args,
      name: identifier.value,
    };
  };

  const isOpenBracket = () => {
    let value = expression(2);
    if (interpretToken(tokens[position]).type !== ')')
      throw new Error("Expected closing parenthesis ')'");
    getNextPosition(position);
    return value;
  };

  prefix('number', 9, number => number);
  prefix('identifier', 9, isIdentifier);
  prefix('(', 8, isOpenBracket);
  prefix('-', 7);
  infix('^', 6, 5);
  infix('*', 4);
  infix('/', 4);
  infix('%', 4);
  infix('+', 3);
  infix('-', 3);

  const parseTree = [];
  while (interpretToken(tokens[position]).type !== '(end)') {
    parseTree.push(expression(0));
  }
  return parseTree;
};

export default parse;
