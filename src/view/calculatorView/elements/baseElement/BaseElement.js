class BaseElement {
  constructor() {}

  createElement(tag, className, attribut, valueAttribut) {
    const element = document.createElement(`${tag}`);
    if (className) {
      element.classList.add(`${className}`);
    }
    if (attribut) {
      element.setAttribute(`${attribut}`, `${valueAttribut}`);
    }
    return element;
  }

  addExtraClassName(element, className) {
    element.classList.add(`${className}`);
  }

  addEventForElement(element, action, actionType, context, ...args) {
    if (!context) {
      return element.addEventListener(`${actionType}`, () => action(...args));
    }
    return element.addEventListener(`${actionType}`, () => action(context, ...args));
  }

  getElementByClassName(className) {
    return document.querySelector(`.${className}`);
  }
}

export default BaseElement;
