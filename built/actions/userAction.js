/**
 * author:SunShinewyf
 * date:2017-01-05
 */
import * as ActionType from "./types";
let testUser = {
    'name': 'sunshine',
    'psw': 'wyf414'
};
export function Login() {
    return (dispatch) => {
        dispatch(isLogining());
    };
}
function isLogining() {
    return {
        type: ActionType.LOGIN_DOING
    };
}
function loginSuccess(isSuccess, user) {
    return {
        type: ActionType.LOGIN_DONE,
        isSuccess: isSuccess,
        user: user
    };
}
