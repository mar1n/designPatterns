let instance;

const privateMethod = () => {
    console.log("I am private");
}
const privateVariable = "Im also private";

const bodyParts = (bodyPart) => {
    if(bodyPart === "head") {
        return "Eyes nose lips"
    } else if(bodyPart === "hand") {
        return "arm wirst fingers"
    } else {
        return "..."
    }
}

class MySingleton {
    constructor(bodyPart) {
        if(!instance) {
            this.publicProperty = "I am also public";
            this.bodyPart = bodyPart;
            instance = this;
        }

        return instance;
    }

    publicMethod() {
        console.log("The public can see me!");
    }

    getBodyPart() {
        return bodyParts(this.bodyPart);
    }
}

export default MySingleton;