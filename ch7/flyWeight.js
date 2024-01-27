const implementsInterface = (obj, iface) => {
  for (let method of iface) {
    if (typeof obj[method] !== "function") {
      return false;
    }
  }
  return true;
};

const CoffeeOrder = ["serveCoffee", "getFlavor"];

class CoffeeFlavor {
  constructor(newFlavor) {
    this.flavor = newFlavor;
  }

  getFlavor() {
    return this.flavor;
  }

  serveCoffee(context) {
    console.log(
      `Serving Coffee flavor ${this.flavor} to table ${context.getTable()}`
    );
  }
}

const CoffeeOrderContext = (tableNumber) => ({
  getTable() {
    return tableNumber;
  },
});

class CoffeeFlavorFactory {
  constructor() {
    this.flavors = {};
    this.length = 0;
  }

  getCoffeeFlavor(flavorName) {
    let flavor = this.flavors[flavorName];
    if (!flavor) {
      flavor = new CoffeeFlavor(flavorName);
      if (implementsInterface(flavor, CoffeeOrder)) {
        this.flavors[flavorName] = flavor;
        this.length++;
      } else {
        console.log(
          `Error: ${flavorName} does not implement the CoffeeOrder interface.`
        );
        return null;
      }
    }
    return flavor;
  }

  getTotalCoffeeFlavorsMade() {
    return this.length;
  }
}

function testFlyweight() {
  const flavors = [];
  const tables = [];
  let ordersMade = 0;
  const flavorFactory = new CoffeeFlavorFactory();

  function takeOrders(flavorIn, table) {
    const flavor = flavorFactory.getCoffeeFlavor(flavorIn);
    if (flavor) {
      flavors.push(flavor);
      tables.push(CoffeeOrderContext(table));
      ordersMade++;
    }
  }

  // Place orders
  takeOrders("Cappuccino", 2);
  takeOrders("Latte", 4);
  takeOrders("Espresso", 1);
  takeOrders("Americano", 3);

  for (let i = 0; i < ordersMade; ++i) {
    flavors[i].serveCoffee(tables[i]);
  }

  console.log(' ');
console.log(`total CoffeeFlavor objects made:
${flavorFactory.getTotalCoffeeFlavorsMade()}`);
}

testFlyweight();
