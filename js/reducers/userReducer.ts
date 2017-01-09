/**
 * author:SunShinewyf
 * date:2017-01-07
 */
import { combineReducers } from 'redux';
import { Spot, User, Travel } from "../models";
import * as ActionTypes from "../actions/types";

const initialState = {
    isLoginedIn: false,
    user: {},
    status: null
}

export default function user(state = initialState, action) {

}

