import numbers from '../../../../calculator/config/numbers/numbers';
import operations from '../../../../calculator/config/operations/operations';
import mainClassNames from '../../classNames/mainClassNames';
import { rootsClassNames } from '../../classNames/rootsClassNames';
import { eventsType, htmlElements } from '../../config/config';
import BaseElement from '../../elements/baseElement/BaseElement';
import ExtraActions from '../extraActions/ExtraActions';

class ControlButtons extends BaseElement {
  constructor(model) {
    super();
    this.model = model;
    this.containerForControllButtons = this.getElementByClassName(
      `${rootsClassNames.rootForControllButtons}`,
    );
    this.inputField = this.getElementByClassName(`${rootsClassNames.inputField}`);
  }

  render() {
    this.renderNumbers();
    this.renderTopOperators();
    this.renderRightOperators();
    new ExtraActions(this.model).setEvents();
  }

  renderNumbers() {
    const container = this.createElement(
      `${htmlElements.tags.div}`,
      `${rootsClassNames.rootForNumbers}`,
    );
    Object.entries(numbers).forEach(element => {
      const newElement = this.createElement(
        `${htmlElements.tags.button}`,
        `${element[0]}-${htmlElements.tags.button}`,
      );
      newElement.textContent = element[1].content;
      this.addExtraClassName(newElement, `${mainClassNames.number}`);
      this.addExtraClassName(newElement, `${mainClassNames.mainButtons}`);
      this.addEventForElement(
        newElement,
        this.inputContent,
        eventsType.click,
        null,
        element[1].content,
      );
      container.append(newElement);
    });
    this.containerForControllButtons.append(container);
  }

  inputContent(content) {
    const inputField = document.querySelector(`.${rootsClassNames.inputField}`);
    const cursorPosition = inputField.selectionStart;
    const currentValue = inputField.value;
    const newValue =
      currentValue.slice(0, cursorPosition) + content + currentValue.slice(cursorPosition);
    inputField.value = newValue;
    inputField.focus();
    inputField.setSelectionRange(cursorPosition + content.length, cursorPosition + content.length);
  }

  renderTopOperators() {
    const container = this.createElement(
      `${htmlElements.tags.div}`,
      `${rootsClassNames.rootForTopOperators}`,
    );
    this.addExtraClassName(container, rootsClassNames.operationBackground);
    let lastElement = 3;
    const elements = Object.entries(operations);
    for (let index = 0; index < lastElement; index += 1) {
      const newElement = this.createElement(
        `${htmlElements.tags.button}`,
        `${elements[index][0]}-${htmlElements.tags.button}`,
      );
      this.addExtraClassName(newElement, `${mainClassNames.mainButtons}`);
      this.addExtraClassName(newElement, `${mainClassNames.operation}`);
      if (!elements[index][1].customAction) {
        this.addEventForElement(
          newElement,
          this.inputContent,
          eventsType.click,
          null,
          elements[index][1].content,
        );
      }
      newElement.textContent = elements[index][1].content;
      container.append(newElement);
    }
    this.containerForControllButtons.append(container);
  }

  renderRightOperators() {
    const container = this.createElement(
      `${htmlElements.tags.div}`,
      `${rootsClassNames.rootForRightOperators}`,
    );
    this.addExtraClassName(container, rootsClassNames.operationBackground);
    const elements = Object.entries(operations);
    let lastElement = elements.length;
    for (let index = 3; index < lastElement; index += 1) {
      const newElement = this.createElement(
        `${htmlElements.tags.button}`,
        `${elements[index][0]}-${htmlElements.tags.button}`,
      );
      if (index === elements.length - 1) {
        newElement.setAttribute(`${htmlElements.atributes.name.id}`, `${elements[index][0]}`);
      }
      this.addExtraClassName(newElement, `${mainClassNames.mainButtons}`);
      this.addExtraClassName(newElement, `${mainClassNames.operation}`);
      if (!elements[index][1].customAction) {
        this.addEventForElement(
          newElement,
          this.inputContent,
          eventsType.click,
          null,
          elements[index][1].content,
        );
      }
      newElement.textContent = elements[index][1].content;
      container.append(newElement);
    }
    this.containerForControllButtons.append(container);
  }
}

export default ControlButtons;
