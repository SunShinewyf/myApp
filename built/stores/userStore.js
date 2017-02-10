/**
 * author:SunShinewyf
 * date:2017-01-05
 */
import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from '../reducers';
const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatching a function');
    }
    else {
        console.log('dispatching', action);
    }
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};
let middlewares = [
    logger,
    thunk
];
let createAppStore = applyMiddleware(...middlewares)(createStore);
export function userStore(onComplete) {
    const store = autoRehydrate()(createAppStore)(reducers);
    let opt = {
        storage: AsyncStorage,
        transform: [],
    };
    persistStore(store, opt, onComplete);
    return store;
}
