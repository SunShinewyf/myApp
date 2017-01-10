/**
 * author:SunShinewyf
 * date:2017-01-09
 */
import { combineReducers } from 'redux';
import userReducer from './userReducer';
export default combineReducers({
    userStore: userReducer
});
