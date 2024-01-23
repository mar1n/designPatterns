const newObject1 = {};
const newObject2 = Object.create(Object.prototype);
const newObject3 = new Object();

newObject1.someKey = "Hello World";
var key = newObject1.someKey;

newObject2["someKey"] = "Hello World";
var key2 = newObject2["someKey"];

Object.defineProperty(newObject3, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});

var config = {};
var defineProp = function (obj, key, value) {
    config.value = value;
    Object.defineProperty(obj, key, config);
}
var person = Object.create(null);

defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

const driver = Object.create(person);
defineProp(driver, "topSpeed", "100mph");

class Car {
    constructor(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    toString() {
        return `${this.model} has done ${this.miles} miles`
    }
}

let civic = new Car("Honda Civic", 2009, 2000);
let mondeo = new Car("Ford Mondeo", 2010, 500);
console.log(civic.toString());
console.log(mondeo.toString());
class Car2 {
    constructor(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }
}

Car2.prototype.toString = function() {
    return `${this.model} has done ${this.miles} miles.`;
}
let civic2 = new Car2("Honda Civic", 2009, 20000);
let mondeo2 = new Car2("Ford Mondeo", 2010, 5000);

// console.log("newObject1", newObject1);
// console.log("newObject2", newObject2);
// console.log("newObject3", newObject3);
// console.log("newObject1 dot syntax", key);
// console.log("newObject2 squere baracket syntax", key2);
// console.log("Object.defineProperty", newObject3.someKey);
// console.log("defineProp", person.car);
// console.log("driver", driver.dateOfBirth);
// console.log("civic", civic.toString());
// console.log("mondeo", mondeo.toString());
// console.log("civic2 with prototype", civic2.toString());
// console.log("mondeo with prototype", mondeo2.toString());