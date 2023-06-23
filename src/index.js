import './view/styles/index.scss';
import CalculatorView from './view/calculatorView/CalculatorView';
import calculate from './calculator/calculate/calculate';
import Model from './model/Model';

const model = new Model();
new CalculatorView(model);
