/**
 * author:SunShinewyf
 * date:2016-12-22
 */
import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
const backImg = require('../../../public/pull_left.png');
const moreImg = require('../../../public/more.png');
export class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: [styles.headerWrapper, { width: CONST.WIDTH }] },
            React.createElement(Image, { source: backImg, style: styles.backImg }),
            React.createElement(View, { style: [styles.titleBox] },
                React.createElement(Text, { style: [styles.headerText, { textAlign: 'center' }] }, "\u7528\u6237\u4E2D\u5FC3")),
            React.createElement(Image, { source: moreImg, style: styles.moreImg })));
    }
}
const styles = StyleSheet.create({
    headerWrapper: {
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#2a8ae0',
    },
    backImg: {
        width: 22,
        height: 22,
        marginTop: 40,
        marginLeft: 15,
    },
    titleBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginTop: 30,
    },
    headerText: {
        fontSize: 15,
        color: '#d0d4d7',
        textAlign: 'center',
    },
    moreImg: {
        width: 22,
        height: 22,
        marginTop: 40,
        marginRight: 15
    }
});
