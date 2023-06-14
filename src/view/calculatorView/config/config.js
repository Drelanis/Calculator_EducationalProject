const htmlElements = {
  tags: {
    div: 'div',
    span: 'span',
    i: 'i',
    button: 'button',
    label: 'label',
    input: 'input',
    textarea: 'textarea',
  },

  atributes: {
    name: {
      for: 'for',
      id: 'id',
      type: 'type',
      placeholder: 'placeholder',
    },
    value: {
      checkbox: 'checkbox',
      text: 'text',
      inputPlaceholder: 'Expression input',
    },
  },
};

const calculator = {
  numbers: {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    doubleZero: '00',
  },
  operators: {
    plus: '+',
    minus: '-',
    multiplication: '*',
    division: '/',
    equals: '=',
  },
  extraSymbols: {
    point: '.',
  },
};

const eventsType = {
  click: 'click',
  input: 'input',
  change: 'change',
};

export { htmlElements, calculator, eventsType };
