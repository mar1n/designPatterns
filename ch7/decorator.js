class Vehicle {
  constructor(vehicleType) {
    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.license = "00000-000";
  }
}

const testInstance = new Vehicle("car");
console.log(testInstance);

const truck = new Vehicle("truck");

truck.setModel = function (modelName) {
  this.model = modelName;
};

truck.setColor = function (color) {
  this.color = color;
};

truck.setModel("CAT");
truck.setColor("blue");

console.log(truck);

const secondInstance = new Vehicle("car");
console.log(secondInstance);

class MacBook {
  constructor() {
    this.cost = 997;
    this.screenSize = 11.6;
  }
  getCost() {
    return this.cost;
  }
  getScreenSize() {
    return this.screenSize;
  }
}

class Memory extends MacBook {
  constructor(macBook) {
    super();
    this.macBook = macBook;
  }
  getCost() {
    return this.macBook.getCost() + 75;
  }
}

class Engraving extends MacBook {
  constructor(macBook) {
    super();
    this.macBook = macBook;
  }
  getCost() {
    return this.macBook.getCost() + 200;
  }
}

class Insurance extends MacBook {
  constructor(macBook) {
    super();
    this.macBook = macBook;
  }
  getCost() {
    return this.macBook.getCost() + 250;
  }
}

let mb = new MacBook();

mb = new Memory(mb);
mb = new Engraving(mb);
mb = new Insurance(mb);

console.log(mb.getCost());
console.log(mb.getScreenSize());