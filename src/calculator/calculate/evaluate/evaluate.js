import constants from '../../config/constants/constants';
import { unaryFunctions, mainFunctions } from '../../config/functions/functions';

const parseNode = node => {
  const args = {};
  if (node.type === 'number') return node.value;
  if (mainFunctions[node.type]) {
    if (node.left) return mainFunctions[node.type](parseNode(node.left), parseNode(node.right));
    return mainFunctions[node.type](parseNode(node.right));
  } else if (node.type === 'identifier') {
    const value = args[node.value] ? args[node.value] : constants[node.value];
    if (!value) throw new Error(node.value + ' is undefined');
    return value;
  } else if (node.type === 'assign') {
    constants[node.name] = parseNode(node.value);
  } else if (node.type === 'call') {
    node.args = node.args.map(parseNode);
    return unaryFunctions[node.name](...node.args);
  } else if (node.type === 'function') {
    unaryFunctions[node.name] = function (...args) {
      for (let index = 0; index < node.args.length; index += 1) {
        args[node.args[index].value] = args[index];
      }
      return parseNode(node.value);
    };
  }
};

const evaluate = parseTree => {
  let output = '';
  for (let index = 0; index < parseTree.length; index += 1) {
    const value = parseNode(parseTree[index]);
    if (value) output += value;
  }
  return output;
};

export default evaluate;
