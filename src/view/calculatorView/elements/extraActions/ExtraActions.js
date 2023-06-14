import { extraEvents, rootsClassNames, outputClassNames } from '../../classNames/rootsClassNames';
import { eventsType } from '../../config/config';
import BaseElement from '../baseElement/BaseElement';

class ExtraActions extends BaseElement {
  constructor() {
    super();
  }

  setEvents() {
    this.setEventForAlternatingCurrent();
  }

  setEventForAlternatingCurrent() {
    const element = this.getElementByClassName(extraEvents.alternatingCurrent);
    this.addEventForElement(element, this.clearFields, eventsType.click);
  }

  clearFields() {
    const inputField = document.querySelector(`.${rootsClassNames.inputField}`);
    const outputField = document.querySelector(`.${outputClassNames.resultField}`);
    inputField.value = '';
    outputField.textContent = '';
  }

  setEventForEqual() {}
}

export default ExtraActions;
