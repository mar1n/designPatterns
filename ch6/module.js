// const myModule = {
//     myProperty: "someValue",
//     myConfig: {
//         useCaching: true,
//         language: "en",
//     },
//     saySomething() {
//         console.log("Where is Paul Irish debugging today?");
//     },
//     reportMyConfig() {
//         console.log(`Caching is: ${this.myConfig.useCaching ? 'enabled' : 'disabled'}`);
//     },
//     updateMyConfig(newConfig) {
//         if(typeof newConfig === "object"){
//             this.myConfig = newConfig;
//             console.log(this.myConfig.language);
//         }
//     }
// }

// myModule.saySomething();

// myModule.reportMyConfig();

// myModule.updateMyConfig({
//     language: "fr",
//     useCaching: false
// })

// myModule.reportMyConfig();

let counter = 0;

const testModule = {
    incrementCounter() {
        return counter++;
    },
    resetCounter() {
        console.log(`counter value prior to rest: ${counter}`);
        counter = 0;
    }
}

module.exports = testModule;