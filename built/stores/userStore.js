/**
 * author:SunShinewyf
 * date:2017-01-05
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from '../reducers';
let middlewares = [thunk];
let createAppStore = applyMiddleware(...middlewares)(createStore);
export default function configureStore(onComplete) {
    const store = autoRehydrate()(createStore)(reducers);
    let opt = {
        storage: AsyncStorage,
        transform: []
    };
    persistStore(store, opt, onComplete);
    return store;
}
