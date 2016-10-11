/**
 * Do not use this, consider Redux instead.  Demo purposes only. :)
 */
let state = {};
let subscribers = [];

export default {
    get() { return state; },
    set(changeFn) {
        state = changeFn(state);
        subscribers.forEach(sub => sub());
        return state;
    },
    subscribe(cb) {
        subscribers.push(cb);
    }
}
