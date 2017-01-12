/**
 * author:SunShinewyf
 * date:2017-01-05
 */
import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducers from '../reducers'

export function userStore(initialState) {
    const store = createStore(reducers, initialState)
    return store
}


