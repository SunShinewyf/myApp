/**
 * author:SunShinewyf
 * date:2017-02-13
 */
import { createStore, applyMiddleware } from 'redux';
import { travelReducer } from '../reducers'

export function travelStore() {
    const store = createStore(travelReducer);
    return store;
}