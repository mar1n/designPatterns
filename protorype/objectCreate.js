const myCar = {
    name: "Ford Escort",
    
    drive() {
        console.log("Weeee. I'm drivinf!");
    },
    panic() {
        console.log("Wait. How do you stop this thing?");
    }
}

const yourCar = Object.create(myCar);
console.log(yourCar.name);
console.log(yourCar.drive());

const vehicle = {
    getModel() {
        console.log(`The model of this vehicle is...${this.model}`);
    }
}

const car = Object.create(vehicle, {
    id: {
        value: "1",
        enumerable: true,
    },

    model: {
        value: "Ford",
        enumerable: true,
    }
})

console.log(car.getModel());

class VehiclePrototype {
    constructor(model) {
        this.model = model;
    }

    getModel() {
        console.log(`The model of this vehicle is... ${this.model}`);
    }

    clone() {}
}

class Vehicle extends VehiclePrototype {
    constructor(model) {
        super(model)
    }

    clone() {
        return new Vehicle(this.model);
    }
}

const cara = new Vehicle("Ford Escort");
const cara2 = cara.clone();
cara2.getModel();

const beget = (() => {
    class F {
        constructor() {}
        
    }
    return proto => {
        F.prototype = proto;
        return new F()
    }
})
