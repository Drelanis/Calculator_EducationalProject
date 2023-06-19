class Observer {
  constructor() {
    this.observers = {};
  }

  setObserver(observer) {
    this.observers[observer] = [];
  }

  addSubscribe(observer, subscribe) {
    if (!this.observers[observer]) {
      this.setObserver(observer);
    }
    this.observers[observer].push(subscribe);
  }

  notifyObserver(context, observer, data, secondContext) {
    Object.values(context.observers[observer]).forEach(observer =>
      observer(data, context, secondContext),
    );
  }
}

export default Observer;
