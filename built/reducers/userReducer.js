import * as ActionTypes from "../actions/types";
const initialState = {
    status: 'init',
    isSuccess: false,
    user: null
};
export default function user(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOGIN_INIT:
            return Object.assign({}, state, {
                status: 'init',
                isSuccess: false,
                user: null
            });
        case ActionTypes.LOGIN_DOING:
            return Object.assign({}, state, {
                status: 'doing',
                isSuccess: false,
                user: null
            });
        case ActionTypes.LOGIN_DONE:
            return Object.assign({}, state, {
                status: 'done',
                isSuccess: action.isSuccess,
                user: action.user
            });
        default: return state;
    }
}
