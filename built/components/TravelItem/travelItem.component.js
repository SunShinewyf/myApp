/**
 * author:SunShinewyf
 * date:2016-12-25
 */
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
const gzImg = require('../../../public/gz.png');
const likeImg = require('../../../public/appreciate_light.png');
const likedImg = require('../../../public/appreciate_fill_light.png');
const commentImg = require('../../../public/comment_light.png');
export class TravelItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: [styles.itemWrapper, { width: CONST.WIDTH - 22 }] },
            React.createElement(Image, { source: gzImg, style: styles.leftImg }),
            React.createElement(View, { style: [styles.rightInfo] },
                React.createElement(View, { style: [styles.detail] },
                    React.createElement(Text, { style: styles.placeName }, "\u5E7F\u5DDE"),
                    React.createElement(Text, { style: [styles.date] }, "2016-11-11")),
                React.createElement(TouchableOpacity, { style: [styles.contentBox, { width: CONST.WIDTH - 120 }] },
                    React.createElement(Text, { style: [styles.content] }, "\u5E7F\u5DDE\u5854\u53C8\u79F0\u5E7F\u5DDE\u65B0\u7535\u89C6\u5854\uFF0C\u6635\u79F0\u5C0F\u86EE\u8170\uFF0C\u4F4D\u4E8E\u4E2D\u56FD\u5E7F\u5DDE\u5E02\u6D77\u73E0\u533A")),
                React.createElement(View, { style: [styles.action] },
                    React.createElement(TouchableOpacity, { style: [styles.actionType] },
                        React.createElement(Image, { source: likeImg, style: [styles.itemImg, { height: 20, width: 20 }] }),
                        React.createElement(Text, { style: styles.actionText }, "\u559C\u6B22")),
                    React.createElement(TouchableOpacity, { style: [styles.actionType, { marginLeft: 10 }] },
                        React.createElement(Image, { source: commentImg, style: styles.itemImg }),
                        React.createElement(Text, { style: styles.actionText }, "\u8BC4\u8BBA"))))));
    }
}
const styles = StyleSheet.create({
    itemWrapper: {
        height: 120,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    leftImg: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#5db3e9',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    rightInfo: {
        flexDirection: 'column',
        marginRight: 10
    },
    placeName: {
        color: '#999',
        fontSize: 14,
        paddingTop: 10,
    },
    detail: {
        flexDirection: 'row',
    },
    date: {
        color: '#999',
        fontSize: 13,
        position: 'absolute',
        top: 10,
        right: 10
    },
    contentBox: {
        marginRight: 10,
    },
    content: {
        fontSize: 14,
        color: '#697277',
        lineHeight: 24,
        textAlign: 'justify',
    },
    action: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    actionType: {
        flexDirection: 'row'
    },
    itemImg: {
        height: 22,
        width: 22,
    },
    actionText: {
        paddingTop: 5,
        paddingLeft: 4,
        color: '#999',
        fontSize: 12
    }
});
