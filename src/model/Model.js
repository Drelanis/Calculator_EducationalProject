import Observer from '../Observer/Observer';

class Model extends Observer {
  constructor() {
    super();
    this.setObserver('newMathExpression');
    this.setObserver('newMathResult');
    this.setObserver('renderError');
  }
}

export default Model;
