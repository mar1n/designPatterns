import _private from "./privateMethods.mjs";

const module = {
    facade({val, run }) {
        _private.set(val);
        _private.get();
        if(run) {
            _private.run();
        }
    }
}

export default module;