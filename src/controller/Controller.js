import calculate from '../calculator/calculate/calculate';
import validationExpression from '../calculator/calculate/errors/validationExpression';

class Controller {
  constructor(model) {
    this.model = model;
  }

  controllerInit() {
    this.model.addSubscribe('newMathExpression', this.calculate);
  }

  calculate(input, context) {
    const exression = input.value;
    const errorMessage = validationExpression(exression);
    if (errorMessage !== true) {
      context.notifyObserver(context, 'renderError', errorMessage);
      context.notifyObserver(context, 'newMathResult', 0);
      return;
    }
    const result = calculate(exression);
    context.notifyObserver(context, 'newMathResult', result);
  }
}

export default Controller;
