/**
 * author:SunShinewyf
 * date:2017-02-13
 */
import { createStore } from 'redux';
import { travelReducer } from '../reducers';
export function travelStore() {
    const store = createStore(travelReducer);
    return store;
}
