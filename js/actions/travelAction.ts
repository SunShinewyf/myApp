/**
 * author:SunShinewyf
 * date:2017-02-13
 */

import * as ActionType from "./types";
let testUser = {
    'name': 'sunshine',
    'psw': 'wyf414'
};

export const travelActions = {
    getTravelList() {
        return {
            type: ActionType.GETTRAVELLIST
        }
    },
    zanTravel() {
        return {
            type: ActionType.ZANTRAVEL
        }
    },
    commentTravel() {
        return {
            type: ActionType.COMMENTTRAVEL
        }
    },
    addTravel() {
        return {
            type: ActionType.ADDTRAVEL
        }
    }
}
