import lexicalAnalyzer from './lexicalAnalyzer/lexicalAnalyzer';
import parse from './parse/parse';
import evaluate from './evaluate/evaluate';

const calculate = input => {
  try {
    const tokens = lexicalAnalyzer(input);
    const parseTree = parse(tokens);
    const output = evaluate(parseTree);
    return output;
  } catch (error) {
    throw new Error(error);
  }
};

export default calculate;
