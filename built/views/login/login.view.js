/**
 * author:SunShinewyf
 * date:2017-01-02
 */
import * as React from 'react';
import { View, Image, TextInput, StyleSheet, } from 'react-native';
import * as CONST from '../../CONST';
const bgImg = require('../../../public/loginBg.png');
export class LoginView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: [styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }] },
            React.createElement(Image, { source: bgImg, style: { width: CONST.WIDTH, height: 250 } }),
            React.createElement(View, { style: [styles.innerContainer] },
                React.createElement(TextInput, { style: styles.input }))));
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    innerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    input: {
        width: 200,
        height: 45,
    }
});
