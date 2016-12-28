/**
 * author:SunShinewyf
 * date:2016-12-26
 */
import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const avatar = require('../../../public/me.png');
const right = require('../../../public/round_right.png');
export class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: styles.listContainer },
            React.createElement(View, { style: [styles.userInfo] },
                React.createElement(Image, { source: avatar, style: styles.avatar }),
                React.createElement(View, null,
                    React.createElement(Text, { style: styles.userName }, "SunShinewyf"),
                    React.createElement(Text, { style: styles.date }, "2016-12-15")),
                React.createElement(Image, { source: right, style: [styles.rightImg] }))));
    }
}
const styles = StyleSheet.create({
    listContainer: {},
    userInfo: {
        flexDirection: 'row'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 10,
        marginLeft: 10,
    },
    userName: {
        fontSize: 20,
        color: '#2a8ae0',
        lineHeight: 40,
        paddingLeft: 30
    },
    date: {
        paddingLeft: 30,
        color: '#999'
    },
    rightImg: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 10,
        top: 15
    }
});
