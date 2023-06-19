import {
  classNamesForExtraSetting,
  inputClassNames,
  outputClassNames,
  rootsClassNames,
} from './classNames/rootsClassNames';
import { eventsType, htmlElements } from './config/config';
import BaseElement from './elements/baseElement/BaseElement';
import ControlButtons from './elements/controlButtons/ControlButtons';
import ErrorField from './elements/errorField/ErrorField';
import Input from './elements/input/Input';
import Options from './elements/options/Options';
import Output from './elements/output/Output';

class CalculatorView extends BaseElement {
  constructor(model) {
    super();
    this.model = model;
  }

  render() {
    const root = this.getElementByClassName(rootsClassNames.mainRoot);
    const calculatorBody = this.createCalculatorBody();
    root.append(calculatorBody);
    const mainButtons = new ControlButtons(this.model);
    new Options(mainButtons).render();
    new Input().render();
    new Output().render();
    mainButtons.render();
    const error = new ErrorField();
    this.model.addSubscribe('newMathResult', this.renderResult);
    this.model.addSubscribe('renderError', error.renderErrorField);
  }

  renderResult(result) {
    const outputField = document.querySelector(`.${outputClassNames.resultField}`);
    outputField.textContent = '';
    outputField.textContent += result;
  }

  createCalculatorBody() {
    const root = this.createElement(htmlElements.tags.div, rootsClassNames.calculator);
    const containerForOptions = this.createElement(
      htmlElements.tags.div,
      rootsClassNames.calculatorOptions,
    );
    const containerInputField = this.createElement(
      htmlElements.tags.div,
      rootsClassNames.containerInputField,
    );
    const containerOutputField = this.createElement(
      htmlElements.tags.div,
      rootsClassNames.outputField,
    );
    const containerControllButtons = this.createElement(
      htmlElements.tags.div,
      rootsClassNames.rootForControllButtons,
    );
    root.append(
      containerForOptions,
      containerInputField,
      containerOutputField,
      containerControllButtons,
    );
    return root;
  }
}

export default CalculatorView;
