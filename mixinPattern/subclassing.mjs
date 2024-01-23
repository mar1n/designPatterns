class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = "male";
    }
}

const clark = new Person('Clark', 'Kent');

class Superhero extends Person {
    constructor(firstName, lastName, powers) {
        super(firstName, lastName);
        this.powers = powers;
    }
}

const SuperMan = new Superhero('Clark', 'Kent', ['flight', 'heat-vision']);
console.log(SuperMan);

const MyMixins = superclass => 
    class extends superclass {
        moveUp() {
            console.log('move up');
        }
        moveDown() {
            console.log('move down');
        }
        stop() {
            console.log('stop! in the name of love!');
        }
    }

export default MyMixins;

class CarAnimator {
    moveLeft() {
        console.log('move left');
    }
}

class PersonAnimator {
    moveRandomly() {
        console.log('move right');
    }
}

class MyAnimator extends MyMixins(CarAnimator) {}

const myAnimator = new MyAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();