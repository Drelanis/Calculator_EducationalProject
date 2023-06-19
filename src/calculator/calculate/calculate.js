import lexicalAnalyzer from './lexicalAnalyzer/lexicalAnalyzer';
import parse from './parse/parse';
import evaluate from './evaluate/evaluate';

const calculate = input => {
  const tokens = lexicalAnalyzer(input);
  const parseTree = parse(tokens);
  const output = evaluate(parseTree);
  return Number(output).toFixed(6);
};

export default calculate;
