let privateCounter = 0;

const privateFunction = () => {
    privateCounter++
}

const publicFunction = () => {
    publicIncrement();
}

const publicIncrement = () => {
    privateFunction();
};

const publicGetCount = () => console.log(privateCounter);

const myRevealingModule = {
    start: publicFunction,
    increment: publicIncrement,
    count: publicGetCount
};

export default myRevealingModule;