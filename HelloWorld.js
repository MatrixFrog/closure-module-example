goog.module('example.HelloWorld');

let Hello2 = goog.forwardDeclare('example.Hello2');


class HelloWorld {
  constructor() {
    Hello2 = goog.module.get('example.Hello2');

    this.h2 = new Hello2();
  }
}

exports = HelloWorld;
