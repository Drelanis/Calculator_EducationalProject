const rootsClassNames = {
  mainRoot: 'main-content',
  calculator: 'calculator',
  calculatorOptions: 'calculator__options',
  containerInputField: 'calculator__expression-input',
  outputField: 'calculator__result-output',
  rootForControllButtons: 'calculator__control-buttons',
  rootForNumbers: 'calculator__control-buttons_numbers-point',
  rootForTopOperators: 'calculator__control-buttons_top-operators',
  rootForRightOperators: 'calculator__control-buttons_operators',
  operationBackground: 'operations-background',
  inputField: 'calculator-input-field',
};

const optionsClassNames = {
  containerForEngineer: 'calculator__options_engineer',
  containerForToggleTheme: 'calculator__options_toggle-theme',
  containerForEngineerIcon: 'calculator__options_engineer',
  containerForHistoryIcon: 'calculator__options_history',
  classNameForToogleInput: 'calculator__options_toggle-theme-toggle',
  classNameForToogleSpan: 'calculator__options_toggle-theme-slider',
};

const inputClassNames = {
  containerInputField: 'calculator__expression-input',
  inputField: 'calculator-input-field',
};

const outputClassNames = {
  equalIcon: 'calculator__result-output_equal',
  resultField: 'calculator__result-output_result',
};

const classNamesForExtraSetting = {
  equalClassName: 'equal-button',
};

const historyField = {
  historyContainer: 'calculator__history',
};

const extraEvents = {
  alternatingCurrent: 'alternatingCurrent-button',
  equal: 'equal-button',
};

const extraActions = {
  root: 'calculator__control-buttons_extra-actions',
};

const errorClassNames = {
  root: 'calculator__expression-input',
  container: 'calculator__error',
  containerForIcon: 'calculator__error_icon',
  text: 'calculator__error_text',
};

export {
  rootsClassNames,
  optionsClassNames,
  classNamesForExtraSetting,
  inputClassNames,
  outputClassNames,
  historyField,
  extraEvents,
  extraActions,
  errorClassNames,
};
