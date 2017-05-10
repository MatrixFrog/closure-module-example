goog.module('example.Hello2');


let HelloWorld = goog.forwardDeclare('example.HelloWorld');

class Hello2 {
  constructor() {
    HelloWorld = goog.module.get('example.HelloWorld');
    this.h = new HelloWorld();
  }
}

exports = Hello2;
