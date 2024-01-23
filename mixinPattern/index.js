import Car from "./Car.mjs";
import MyMixins from "./subclassing.mjs";

class MyCar extends MyMixins(Car) {};

const myCAr = new MyCar({});

myCAr.moveUp();
myCAr.moveDown();

const mySportsCar = new MyCar({
    model: 'Porsche',
    color: 'red'
})

mySportsCar.moveUp();