function Publisher() {
  this.subscribers = [];
}

Publisher.prototype.deliver = function (data) {
  this.subscribers.forEach(function (fn) {
    fn(data);
  });
  return this;
};

Function.prototype.subscribe = function (publisher) {
  var that = this;
  var alreadyExists = publisher.subscribers.some(function (el) {
    if (el === that) {
      return;
    }
  });
  if (!alreadyExists) {
    publisher.subscribers.push(this);
  }
  return this;
};

Function.prototype.unsubscribe = function (publisher) {
    console.log("publisher")
  var that = this;
  publisher.subscribers = publisher.subscribers.filter(function (el) {
    if (el !== that) {
      return el;
    }
  });
  return this;
};

var publisherObject = new Publisher();

var observerObject = function foo(data) {
  // process data
  console.log("data",data);
  // unsubscribe from this publisher
//   foo.subscribe(publisherObject);
};
console.dir(observerObject);
observerObject.subscribe(publisherObject);
publisherObject.deliver("ss");
console.log(observerObject);
