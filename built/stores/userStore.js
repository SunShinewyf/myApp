/**
 * author:SunShinewyf
 * date:2017-01-05
 */
import { createStore } from 'redux';
import reducers from '../reducers';
export default function userStore(initialState) {
    const store = createStore(reducers, initialState);
    if (module.hot) {
    }
}
