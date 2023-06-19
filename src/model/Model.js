import Observer from '../Observer/Observer';
import ErrorField from '../view/calculatorView/elements/errorField/ErrorField';

class Model extends Observer {
  constructor() {
    super();
    this.setObserver('newMathExpression');
    this.setObserver('newMathResult');
    this.setObserver('renderError');
    this.error = new ErrorField();
  }
}

export default Model;
