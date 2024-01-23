let _counter = new WeakMap();

class Module {
    constructor() {
        _counter.set(this, 0);
    }

    incrementCounter() {
        let counter = _counter.get(this);
        counter++;
        _counter.set(this, counter);
    }
    resetCounter() {
        console.log(`counter value prior to reset: ${_counter.get(this)}`);
        _counter.set(this, 0);
    }
}

const testModule = new Module();

testModule.incrementCounter();
testModule.resetCounter();

const myPrivateVar = new WeakMap();
const myprivateMethod = new WeakMap();

class MyNamespace {
    constructor() {
        myPrivateVar.set(this, 0);
        myprivateMethod.set(this, foo => console.log(foo))
        this.myPublicVar = 'foo'
    }

    myPublicFunction(bar) {
        let privateVar = myPrivateVar.get(this);
        const privateMethod = myprivateMethod.get(this);

        privateVar++;
        myPrivateVar.set(this, privateVar);

        privateMethod(bar)
    }
}

const basket = new WeakMap();
const doSomethingPrivate = new WeakMap();
const doSomethingElsePrivate = new WeakMap();

class BasketModule {
    constructor() {
        basket.set(this, []);
        doSomethingPrivate.set(this, () => {

        })
        doSomethingElsePrivate.set(this, () => {

        })
    }

    doSomething() {
        doSomethingPrivate.get(this)();
    }
    doSomethingElse() {
        doSomethingElsePrivate.get(this)();
    }

    addItem(values) {
        const basketData = basket.get(this);
        basketData.push(values);
        basket.set(this, basketData)
    }
    
    getItemCount() {
        return basket.get(this).length;
    }
    getTotal() {
        return basket.get(this).reduce((currentSum, item.price + currentSum, 0))
    }
}