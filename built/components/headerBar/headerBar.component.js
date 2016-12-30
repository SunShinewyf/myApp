/**
 * author:SunShinewyf
 * date:2016-12-22
 */
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
const backImg = require('../../../public/pull_left.png');
const moreImg = require('../../../public/more.png');
export class HeaderBar extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
    }
    /**
     *回退函数
     */
    _pressBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const { title } = this.props;
        return (React.createElement(View, { style: [styles.headerWrapper, { width: CONST.WIDTH }] },
            React.createElement(TouchableOpacity, { style: { marginTop: 40, marginLeft: 15 }, onPress: this._pressBack.bind(this) },
                React.createElement(Image, { source: backImg, style: styles.headerImg })),
            React.createElement(View, { style: [styles.titleBox] },
                React.createElement(Text, { style: [styles.headerText, { textAlign: 'center' }] }, title)),
            React.createElement(TouchableOpacity, { style: { marginTop: 40, marginRight: 15 }, onPress: this._pressBack.bind(this) },
                React.createElement(Image, { source: moreImg, style: styles.headerImg }))));
    }
}
HeaderBar.defaultProps = {};
const styles = StyleSheet.create({
    headerWrapper: {
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#2a8ae0',
    },
    headerImg: {
        width: 22,
        height: 22,
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
});
