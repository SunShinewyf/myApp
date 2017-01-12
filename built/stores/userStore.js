/**
 * author:SunShinewyf
 * date:2017-01-05
 */
import { createStore } from 'redux';
import reducers from '../reducers';
export function userStore(initialState) {
    const store = createStore(reducers, initialState);
    return store;
}
