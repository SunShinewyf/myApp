/**
 * author:SunShinewyf
 * date:2017-01-07
 */
import { combineReducers } from 'redux';
import { SpotStore, UserStore, TravelStore } from "../models";
import * as ActionTypes from "../actions/types";

const initialState = {
    isLoginedIn: false,
    user: {},
    status: null
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                isLoginedIn: true,
                user: action.user,
                status: 'done'
            }
    }
}

