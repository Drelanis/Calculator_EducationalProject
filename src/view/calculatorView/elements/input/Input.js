import { inputClassNames, rootsClassNames } from '../../classNames/rootsClassNames';
import { eventsType, htmlElements } from '../../config/config';
import BaseElement from '../baseElement/BaseElement';
import dataSetting from '../../../../calculator/config/allowedButtons/allowedButtons';

class Input extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const rootElement = this.getElementByClassName(inputClassNames.containerInputField);
    const inputField = this.createInputField();
    rootElement.append(inputField);
  }

  createInputField() {
    const input = this.createElement(
      htmlElements.tags.textarea,
      inputClassNames.inputField,
      htmlElements.atributes.name.type,
      htmlElements.atributes.value.text,
    );
    input.setAttribute(
      htmlElements.atributes.name.placeholder,
      htmlElements.atributes.value.inputPlaceholder,
    );
    input.addEventListener('keypress', event => this.updateExpressionByKey(event));
    return input;
  }

  updateExpressionByKey(event) {
    const allowedButtons = dataSetting();
    const keychar = event.key;
    if (!allowedButtons.includes(keychar)) {
      event.preventDefault();
    }
  }
}

export default Input;
