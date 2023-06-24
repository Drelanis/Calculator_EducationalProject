import {
  extraEvents,
  rootsClassNames,
  outputClassNames,
  inputClassNames,
  classNamesForExtraSetting,
} from '../../classNames/rootsClassNames';
import { eventsType } from '../../config/config';
import BaseElement from '../baseElement/BaseElement';

class ExtraActions extends BaseElement {
  constructor(model) {
    super();
    this.model = model;
    this.setEvents();
  }

  setEvents() {
    this.setEventForAlternatingCurrent();
    this.setEventForEqual(this.model);
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

  setEventForEqual(context) {
    const equal = document.querySelector(`.${classNamesForExtraSetting.equalClassName}`);
    const exression = document.querySelector(`.${inputClassNames.inputField}`);
    this.addEventForElement(
      equal,
      context.notifyObserver,
      eventsType.click,
      context,
      'newMathExpression',
      exression,
    );
  }
}

export default ExtraActions;
