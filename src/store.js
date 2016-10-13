/**
 * Do not use this, consider Redux instead.  Demo purposes only. :)
 */
let state = {};
const subscribers = [];

export default {
    get() { return state; },
    set(changeFn) {
        state = changeFn(state);
        subscribers.forEach(sub => sub());
    },
    subscribe(cb) {
        subscribers.push(cb);
    }
}
