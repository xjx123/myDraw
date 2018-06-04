import Vuex from 'vuex';
import defaultState from './state/state';

export default () => {
    const store = new Vuex.Store({
        state: defaultState
    })

    return store;
}