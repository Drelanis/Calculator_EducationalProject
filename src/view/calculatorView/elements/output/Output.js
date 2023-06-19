import { outputClassNames, rootsClassNames } from '../../classNames/rootsClassNames';
import { calculator, eventsType, htmlElements } from '../../config/config';
import BaseElement from '../baseElement/BaseElement';

class Output extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const outputContainer = this.getElementByClassName(rootsClassNames.outputField);
    const outputIcon = this.createOutputIcon();
    const resultFiled = this.createOuputResult();
    outputContainer.append(outputIcon);
    outputContainer.append(resultFiled);
    this.setCopyFeatures();
  }

  createOutputIcon() {
    const element = this.createElement(htmlElements.tags.span, outputClassNames.equalIcon);
    element.textContent = calculator.operators.equals;
    return element;
  }

  createOuputResult() {
    const element = this.createElement(htmlElements.tags.span, outputClassNames.resultField);
    return element;
  }

  copyFeatures(textForCopy) {
    navigator.clipboard.writeText(textForCopy);
  }

  setCopyFeatures() {
    const element = document.querySelector(`.${outputClassNames.resultField}`);
    element.addEventListener(eventsType.click, () => this.copyFeatures(element.textContent));
  }
}

export default Output;
