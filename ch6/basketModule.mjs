const basket = [];

const doSomethingPrivate = () => {
    console.log("doSomethingPrivate");
}

const doSomethingElsePrivate = () => {
    console.log("doSomethingElsePrivate");
}

const basketModule = {
    addItem(values) {
        basket.push(values);
    },
    getItemCount() {
        return basket.length;
    },
    doSomething() {
        doSomethingPrivate();
    },
    getTotal() {
        return basket.reduce((currentSum, item) => item.price + currentSum, 0);
    }
}

export default basketModule;