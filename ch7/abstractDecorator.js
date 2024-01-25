function Interface(name, methods) {
  if (arguments.length !== 2) {
    throw new Error(
      "Interface constructor called with " +
        arguments.length +
        " arguments, but expected exactly 2."
    );
  }
  this.name = name;
  this.methods = [];
  for (let i = 0; i < methods.length; i++) {
    if (typeof methods[i] !== "string") {
      throw new Error(
        "Interface constructor expects method names to be passed in as strings."
      );
    }
    this.methods.push(methods[i]);
  }
}

// Ensure implementation of an interface
Interface.ensureImplements = function (object, ...interfaces) {
  if (arguments.length < 2) {
    throw new Error(
      "Function Interface.ensureImplements called with " +
        arguments.length +
        " arguments, but expected at least 2."
    );
  }

  for (let i = 0; i < interfaces.length; i++) {
    const interfaceInstance = interfaces[i];
    if (interfaceInstance.constructor !== Interface) {
      throw new Error(
        "Function Interface.ensureImplements expects arguments two and above to be instances of Interface."
      );
    }

    for (let j = 0; j < interfaceInstance.methods.length; j++) {
      const method = interfaceInstance.methods[j];
      if (!object[method] || typeof object[method] !== "function") {
        throw new Error(
          "Function Interface.ensureImplements: object does not implement the " +
            interfaceInstance.name +
            " interface. Method " +
            method +
            " was not found."
        );
      }
    }
  }
};

const MacBook = new Interface("MackBook", [
  "addEngraving",
  "addParallels",
  "add4GBRam",
  "add8GBRam",
  "addCase",
]);

class MacBookPro {
  addEngraving() {
    return "Added Engraving";
  }

  addParallels() {
    return "Added Parallels";
  }

  add4GBRam() {
    return "Added 4GB RAM";
  }

  add8GBRam() {
    return "Added 8GB RAM";
  }

  addCase() {
    return "Added Case";
  }

  getPrice() {
    return 900.0;
  }
}

class MackBookDecorator {
  constructor(macbook) {
    Interface.ensureImplements(macbook, MacBook);
    this.macbook = macbook;
  }
  addEngraving() {
    return this.macbook.addEngraving();
  }
  addParallels() {
    return this.macbook.addParallels();
  }
  add4DBRam() {
    return this.macbook.add4DBRam();
  }
  add8GBRam() {
    return this.macbook.add8GBRam();
  }
  addCase() {
    return this.macbook.addCase();
  }
  getPrice() {
    return this.macbook.getPrice();
  }
}

class CaseDecorator extends MackBookDecorator {
  constructor(macbook) {
    super(macbook);
  }
  addCase() {
    return `${this.macbook.addCase()}Adding case to mackbook`;
  }
  getPrice() {
    return this.macbook.getPrice() + 45.0;
  }
}

const myMacBookPro = new MacBookPro();

console.log(myMacBookPro.getPrice());

const decorateMacBookPro = new CaseDecorator(myMacBookPro);

console.log(decorateMacBookPro.getPrice());