import { constantRegexp, createdRegexp } from '../../config/regexp/regexp';

const isOperator = symbol => constantRegexp.isOperator.test(symbol);
const isDigit = symbol => constantRegexp.isNumber.test(symbol);
const getExpressionForAnalyzer = mathExpression => {
  mathExpression = mathExpression.replace(constantRegexp.isFactorial, 'fact($1)');
  mathExpression = mathExpression.replace(constantRegexp.isSqrt, 'sqrt($1)');
  mathExpression = mathExpression.replace(constantRegexp.putSpaces, ' $1 ').trim();
  mathExpression = mathExpression.replace(constantRegexp.deleteDoubleSpaces, ' ');
  mathExpression = mathExpression.replace(createdRegexp.isIdentifier, match =>
    match.replace(/\s/g, ''),
  );
  mathExpression = mathExpression.replace(createdRegexp.isConstans, match =>
    match.replace(/\s/g, ''),
  );
  return mathExpression;
};

const addToken = (tokens, type, value) => {
  tokens.push({
    type: type,
    value: value,
  });
};

const lexicalAnalyzer = mathExpression => {
  const number = 'number';
  const identifier = 'identifier';
  const tokens = [];
  const lexicalExpression = getExpressionForAnalyzer(mathExpression);
  lexicalExpression.split(/\s*(\S+)\s*/).forEach(element => {
    if (element === '') return;
    if (isOperator(element)) {
      addToken(tokens, element);
    } else if (isDigit(element)) {
      addToken(tokens, number, Number(element));
    } else {
      addToken(tokens, identifier, element);
    }
  });
  addToken(tokens, '(end)');
  return tokens;
};

export default lexicalAnalyzer;
