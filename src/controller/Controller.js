import calculate from '../calculator/calculate/calculate';
import validationExpression from '../calculator/errors/validationExpression';

class Controller {
  constructor(model) {
    this.model = model;
  }

  static calculate(input, context) {
    try {
      const exression = input.value;
      const errorMessage = validationExpression(exression);
      if (errorMessage !== true) {
        context.notifyObserver(context, 'renderError', errorMessage);
        context.notifyObserver(context, 'newMathResult', 0);
        return;
      }
      context.notifyObserver(context, 'newMathResult', calculate(exression));
    } catch (error) {
      context.notifyObserver(context, 'renderError', error.message);
      context.notifyObserver(context, 'newMathResult', 0);
    }
  }
}

export default Controller;
