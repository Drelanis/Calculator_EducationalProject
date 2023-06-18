import BaseElement from '../../elements/baseElement/BaseElement';
import {
  rootsClassNames,
  optionsClassNames,
  classNamesForExtraSetting,
  historyField,
  extraActions,
} from '../../classNames/rootsClassNames';
import { htmlElements, eventsType } from '../../config/config';
import iconsClassNames from '../../public/icons';
import mainClassNames from '../../classNames/mainClassNames';
import darkThemeClassNames from '../../classNames/darkThemeClassNames';
import {
  extraOperationsBinary,
  extraOperationsUnary,
} from '../../../../calculator/config/extraOperations/extraOperations';

class Options extends BaseElement {
  constructor(mainButtons) {
    super();
    this.mainButtons = mainButtons;
  }

  render() {
    const rootElement = this.getElementByClassName(`${rootsClassNames.calculatorOptions}`);
    const toggleThemeContainer = this.renderToggleThemeElement();
    if (Object.values(extraOperationsUnary).length !== 0) {
      const engineerContainer = this.renderEngineerIcon();
      rootElement.append(engineerContainer);
      toggleThemeContainer.style.marginLeft = '0px';
    }
    const historyIcon = this.renderHistoryIcon(this);
    rootElement.append(toggleThemeContainer, historyIcon);
  }

  renderEngineerIcon() {
    const container = this.createElement(
      htmlElements.tags.div,
      optionsClassNames.containerForEngineerIcon,
    );
    const engineerIcon = this.createElement(htmlElements.tags.i, iconsClassNames.mainClassName);
    this.addExtraClassName(engineerIcon, iconsClassNames.engineerCalculatorIcon);
    this.addEventForElement(engineerIcon, this.toggleExtraActions, eventsType.click, this);
    container.append(engineerIcon);
    return container;
  }

  renderToggleThemeElement() {
    const container = this.createElement(
      htmlElements.tags.label,
      optionsClassNames.containerForToggleTheme,
    );
    const inputElement = this.createElement(
      htmlElements.tags.input,
      optionsClassNames.classNameForToogleInput,
      htmlElements.atributes.name.type,
      htmlElements.atributes.value.checkbox,
    );
    const themeSliderContainer = this.createElement(
      htmlElements.tags.span,
      optionsClassNames.classNameForToogleSpan,
    );
    const lightThemeIcon = this.createElement(htmlElements.tags.i, iconsClassNames.mainClassName);
    const darkThemeIcon = this.createElement(htmlElements.tags.i, iconsClassNames.mainClassName);
    this.addExtraClassName(lightThemeIcon, iconsClassNames.lightThemeIcon);
    this.addExtraClassName(darkThemeIcon, iconsClassNames.darkThemeIcon);
    themeSliderContainer.append(lightThemeIcon, darkThemeIcon);
    this.addEventForElement(container, this.themeToggle, eventsType.change, this);
    container.append(inputElement, themeSliderContainer);
    return container;
  }

  renderHistoryIcon() {
    const container = this.createElement(
      htmlElements.tags.div,
      optionsClassNames.containerForHistoryIcon,
    );
    const historyIcon = this.createElement(htmlElements.tags.i, iconsClassNames.mainClassName);
    this.addExtraClassName(historyIcon, iconsClassNames.historyIcon);
    this.addEventForElement(historyIcon, this.renderHistoryField, eventsType.click, this);
    container.append(historyIcon);
    return container;
  }

  renderHistoryField(context) {
    const root = context.getElementByClassName(rootsClassNames.calculator);
    const element = context.createElement(htmlElements.tags.div, historyField.historyContainer);
    if (!context.getElementByClassName(historyField.historyContainer)) {
      root.append(element);
      return;
    }
    context.getElementByClassName(historyField.historyContainer).remove();
  }

  toggleExtraActions(context) {
    const numbers = context.getElementByClassName(rootsClassNames.rootForNumbers);
    const topOptions = context.getElementByClassName(rootsClassNames.rootForTopOperators);
    const rightOptions = context.getElementByClassName(rootsClassNames.rootForRightOperators);
    if (numbers) {
      numbers.remove();
      topOptions.remove();
      rightOptions.remove();
      context.renderExtraActions(context, extraOperationsUnary, extraOperationsBinary);
      return;
    }
    const extraActionsButtons = context.getElementByClassName(extraActions.root);
    extraActionsButtons.remove();
    context.mainButtons.render();
  }

  renderExtraActions(context, extraOperationsUnary, extraOperationsBinary) {
    const container = context.createElement(`${htmlElements.tags.div}`, `${extraActions.root}`);
    const extraOperations = { ...extraOperationsUnary, ...extraOperationsBinary };
    Object.entries(extraOperations).forEach(element => {
      const newElement = context.createElement(
        `${htmlElements.tags.button}`,
        `${element[0]}-${htmlElements.tags.button}`,
      );
      newElement.textContent = element[1].content;
      context.addExtraClassName(newElement, `${mainClassNames.number}`);
      context.addExtraClassName(newElement, `${mainClassNames.mainButtons}`);
      context.addEventForElement(
        newElement,
        context.mainButtons.inputContent,
        eventsType.click,
        null,
        element[1].content,
      );
      container.append(newElement);
    });
    context.getElementByClassName(rootsClassNames.rootForControllButtons).append(container);
  }

  themeToggle(context) {
    const calculator = context.getElementByClassName(rootsClassNames.calculator);
    const historyButton = context.getElementByClassName(optionsClassNames.containerForHistoryIcon);
    const enginnerButton = context.getElementByClassName(optionsClassNames.containerForEngineer);
    const inputContent = context.getElementByClassName(rootsClassNames.inputField);
    const outputContent = context.getElementByClassName(rootsClassNames.outputField);
    const controlButtons = context.getElementByClassName(rootsClassNames.rootForControllButtons);
    const equalButton = context.getElementByClassName(classNamesForExtraSetting.equalClassName);
    const mainButton = document.querySelectorAll(`.${mainClassNames.mainButtons}`);
    const operationElements = document.querySelectorAll(`.${mainClassNames.operatorsBackground}`);
    const operationButtons = document.querySelectorAll(`.${mainClassNames.operation}`);
    const numberButtons = document.querySelectorAll(`.${mainClassNames.number}`);

    calculator.classList.toggle(`${darkThemeClassNames.calculatorDark}`);
    if (enginnerButton) {
      enginnerButton.classList.toggle(`${darkThemeClassNames.engineerOptionsDark}`);
    }
    historyButton.classList.toggle(`${darkThemeClassNames.historyDark}`);
    inputContent.classList.toggle(`${darkThemeClassNames.inputFieldDark}`);
    outputContent.classList.toggle(`${darkThemeClassNames.outputField}`);
    controlButtons.classList.toggle(`${darkThemeClassNames.controlButtonsDark}`);
    Array.from(mainButton).forEach(button =>
      button.classList.toggle(`${darkThemeClassNames.mainButtonDark}`),
    );
    Array.from(operationElements).forEach(button =>
      button.classList.toggle(`${darkThemeClassNames.operationsBackgroundDark}`),
    );
    Array.from(operationButtons).forEach(button =>
      button.classList.toggle(`${darkThemeClassNames.operationButtonsDark}`),
    );
    if (equalButton) {
      equalButton.classList.toggle(`${darkThemeClassNames.equalDark}`);
    }
    Array.from(numberButtons).forEach(button =>
      button.classList.toggle(`${darkThemeClassNames.numbersDark}`),
    );
  }
}

export default Options;
