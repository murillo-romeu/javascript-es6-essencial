// Observer
// É um pattern muito popular em aplicações javascript.
// A isntância (subscriber) mantém uma coleção de objetos (observer) e notifica
// todos eles quando ocorrem mudanças no estado.

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  notify(data) {
    this.observers.forEach(fn => fn(data));
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(obs => obs !== fn);
  }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${ data }`);
const logData2 = data => console.log(`Subscribe 2: ${ data }`);
const logData3 = data => console.log(`Subscribe 3: ${ data }`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('nofity 1');
o.unsubscribe(logData2);
o.notify('nofity 2');