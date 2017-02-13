/**
 * author:SunShinewyf
 * date:2017-01-05
 */
import * as ActionType from "./types";
let testUser = {
    'name': 'sunshine',
    'psw': 'wyf414'
};
export const userActions = {
    login() {
        return {
            type: ActionType.LOGIN_IN
        };
    },
    loginOut() {
        return {
            type: ActionType.LOGIN_OUT
        };
    }
};
