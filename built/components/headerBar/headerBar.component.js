/**
 * author:SunShinewyf
 * date:2016-12-22
 */
import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
const backImg = require('../../../public/back.ios.png');
export class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: [styles.headerWrapper, { width: CONST.WIDTH }] },
            React.createElement(Image, { source: backImg, style: styles.backImg }),
            React.createElement(Text, { style: [styles.headerText, { textAlign: 'center' }] }, "\u7528\u6237\u4E2D\u5FC3")));
    }
}
const styles = StyleSheet.create({
    headerWrapper: {
        height: 70,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'pink',
        backgroundColor: '#fff'
    },
    backImg: {
        marginTop: 40,
        marginLeft: 15,
    },
    headerText: {
        fontSize: 20,
        color: '#666',
        paddingTop: 40,
    }
});
