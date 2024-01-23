let myPrivateVar = 0;

const myPrivateMethod = foo => {
    console.log(foo);
}

const myNamespace = {
    myPublicVar: 'foo',

    myPublicFunction(bar) {
        myPrivateVar++;

        myPrivateMethod(bar);
    }
}

module.exports = myNamespace;