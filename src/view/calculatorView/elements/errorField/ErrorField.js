import { errorClassNames, outputClassNames } from '../../classNames/rootsClassNames';
import { eventsType, htmlElements } from '../../config/config';
import iconsClassNames from '../../public/icons';
import BaseElement from '../baseElement/BaseElement';

class ErrorField extends BaseElement {
  constructor(model) {
    super();
    this.model = model;
  }

  renderErrorField(errorMessage) {
    const previusElement = document.querySelector(`.${errorClassNames.root}`);

    const errorMessageElement = document.createElement(htmlElements.tags.div);
    errorMessageElement.classList.add(errorClassNames.container);

    const errorMessageIconContainer = document.createElement(htmlElements.tags.div);
    errorMessageIconContainer.classList.add(errorClassNames.containerForIcon);

    const errorMessageIcon = document.createElement(htmlElements.tags.i);
    errorMessageIcon.classList.add(iconsClassNames.mainClassName, iconsClassNames.errorIcon);

    const errorMessageText = document.createElement(htmlElements.tags.span);
    errorMessageText.classList.add(errorClassNames.text);
    errorMessageText.textContent = errorMessage;

    errorMessageIconContainer.append(errorMessageIcon);
    errorMessageElement.append(errorMessageIconContainer);
    errorMessageElement.append(errorMessageText);

    previusElement.after(errorMessageElement);

    const errorClearMessage = () => {
      const outputField = document.querySelector(`.${outputClassNames.resultField}`);
      const errorElement = document.querySelector(`.${errorClassNames.container}`);
      if (!errorElement) {
        return;
      }
      errorElement.remove();
      outputField.textContent = '';
      document.removeEventListener(eventsType.mouseDown, errorClearMessage);
      document.removeEventListener(eventsType.click, errorClearMessage);
    };

    document.addEventListener(eventsType.mouseDown, () => errorClearMessage());
    document.addEventListener(eventsType.keyDown, () => errorClearMessage());
  }
}

export default ErrorField;
