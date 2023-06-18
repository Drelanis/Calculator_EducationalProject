import calculate from '../calculator/calculate/calculate';

class Controller {
  constructor(model) {
    this.model = model;
  }

  controllerInit() {
    this.model.addSubscribe('newMathExpression', this.calculate);
  }

  calculate(input, context) {
    const exression = input.value;
    const result = calculate(exression);
    context.notifyObserver(context, 'newMathResult', result);
  }
}

export default Controller;
