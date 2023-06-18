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

  notifyObserver(context, observer, data) {
    Object.values(context.observers[observer]).forEach(observer => observer(data, context));
  }
}

export default Observer;
