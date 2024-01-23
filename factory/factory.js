class Car {
    constructor({ doors = 4, state = "brand new", color = "silver" } = {}) {
        this.doors = doors;
        this.state = state;
        this.color = color;
    }
}

class Truck {
    constructor({state = "used", wheelSize = "large", color = "blue"} = {}) {
        this.state = state;
        this.wheelSize = wheelSize;
        this.color = color;
    }
}

class VehicleFactory {
    constructor() {
        this.vehicleClass = Car;
    }

    createVehicle(options) {
        const { vehicleType, ...rest } = options;

        switch(vehicleType) {
            case 'Car':
                this.vehicleClass = Car;
                break;
            case 'truck':
                    this.vehicleClass = Truck;
                    break;
        }

        return new this.vehicleClass(rest);
    }
}

const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellow',
    doors: 6,
})

console.log(car instanceof Car);

console.log(car);

const movingTruck = carFactory.createVehicle({
    vehicleType: 'truck',
    state: 'like new',
    color: 'red' ,
    wheelSize: 'small'
});

console.log(movingTruck instanceof Truck);

console.log(movingTruck);

class TruckFactory extends VehicleFactory {
    constructor() {
        super();
        this.vehicleClass = Truck;
    }
}

const truckFactory = new TruckFactory();
const myBigTruck = truckFactory.createVehicle({
    state: 'omg... so bad.',
    color: 'pink',
    wheelSize: 'so big'
});

console.log(myBigTruck instanceof Truck);

console.log(myBigTruck);

class AbstractVehicleFactory {
    constructor() {
        this.types = {};
    }

    getVehicle(type, customizations) {
        const Vehicle = this.types[type];
        return Vehicle ? new Vehicle(customizations) : null;
    }

    registerVehicle(type, Vehicle) {
        const proto = Vehicle.prototype;

        if(proto.drive && proto.breakDown) {
            this.types[type] = Vehicle;
        }
        return this;
    }
}

const abstractVehicleFactory = new AbstractVehicleFactory();
abstractVehicleFactory.registerVehicle('car', Car);
abstractVehicleFactory.registerVehicle('truck', Truck);

const carX = abstractVehicleFactory.getVehicle('car', {
    color: 'lime green',
    state: 'like new'
});

const truckX = abstractVehicleFactory.getVehicle('truck', {
    wheelSize: 'medium',
    color: 'neon yellow'
});