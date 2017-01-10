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
        dispatch({
            'type': ActionType.LOGIN,
            'user': testUser
        });
    };
}
