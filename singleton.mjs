let instance;

const privateMethod = () => {
    console.log("I am private");
}
const privateVariable = "Im also private";
const randomNumber = Math.random();

class MySingleton {
    constructor() {
        if(!instance) {
            this.publicProperty = "I am also public";
            instance = this;
        }

        return instance;
    }

    publicMethod() {
        console.log("The public can see me!");
    }

    getRandomNumber() {
        return randomNumber;
    }
}

export default MySingleton;