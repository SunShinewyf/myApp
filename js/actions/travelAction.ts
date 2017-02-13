/**
 * author:SunShinewyf
 * date:2017-02-13
 */

import * as ActionType from "./types";
let testUser = {
    'name': 'sunshine',
    'psw': 'wyf414'
};

export function getTravelList() {
    return (dispatch) => {
        dispatch({ 'type': ActionType.GETTRAVELLIST });
    }
}


export function zanTravel(travelId?:number) {
    return (dispatch,travelId) => {
        dispatch({ type: ActionType.ZANTRAVEL })
    }
}

export function commentTravel() {
    return (dispatch) => {
        dispatch({ type: ActionType.COMMENTTRAVEL })
    }
}

export function addTravel() {
    return (dispatch)=> {
        dispatch({ type: ActionType.ADDTRAVEL })
    }
}