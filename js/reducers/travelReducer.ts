/**
 * author:SunShinewyf
 * date:2017-01-07
 */
import { combineReducers } from 'redux';
import { SpotStore, UserStore, TravelStore } from "../models";
import * as ActionTypes from "../actions/types";

const initialState = {
    isLoading: false,
    travelList: [],
    userList: [],
    spotList: []
}
const oneTravel = {
    travel_id: 1,
    user_id: 11111,
    spot_id: 12345,
    title: '武汉樱花一日游',
    content: '每当三月，校园就成为了樱花的海洋，各地的游人们纷纷前来观看，而学校也会在下旬举办樱花节，组织学生们为游客服务，樱花盛开时节，樱园酷似花的海洋，成千上万游客慕名而至，留连观赏，如醉如痴，大有“三月赏樱唯有武大”的意趣。',
    date: '2016-04-14',
    zan_num: 123,
    share_num: 23,
    comment_num: 34
}

export function travelReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GETTRAVELLIST:
            return Object.assign({}, state, {
                isLoading: false,
                travelList: state.travelList,
                userList: state.userList,
                spotList: state.spotList
            })
        default: return state
    }
}