import Controller from '../controller/Controller';
import Observer from '../observer/Observer';
import CalculatorView from '../view/calculatorView/CalculatorView';
import ErrorField from '../view/calculatorView/elements/errorField/ErrorField';

class Model extends Observer {
  constructor() {
    super();
    this.addSubscribe('newMathExpression', Controller.calculate);
    this.addSubscribe('newMathResult', CalculatorView.renderResult);
    this.addSubscribe('renderError', ErrorField.renderErrorField);
  }
}

export default Model;
