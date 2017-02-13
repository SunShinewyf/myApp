/**
 * author:SunShinewyf
 * date:2017-01-07
 */
import { SpotStore, UserStore, TravelStore } from "../models";
import * as ActionTypes from "../actions/types";

const initialState = {
    isLoggedIn: false,
    user: {},
    status: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOGIN_DOING:
            return Object.assign({}, state, {
                status: 'doing',
                isLoggedIn: true,
                user: null
            })
        case ActionTypes.LOGIN_IN:
            return Object.assign({}, state, {
                isLoggedIn: true,
                user: action.user,
                status: 'done'
            })
        case ActionTypes.LOGIN_OUT:
            return Object.assign({}, state, {
                isLoggedIn: false,
                user: {},
                status: null
            })
        case ActionTypes.LOGIN_ERROR:
            return Object.assign({}, state, {
                isLoggedIn: false,
                user: {},
                status: null
            })
        default: return state
    }
}

