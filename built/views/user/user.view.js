/**
 * Copyright 2016 SunShine
 * 2016-12-20
 */
import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FooterBar, TravelItem } from '../../components';
import * as CONST from '../../CONST';
const avatarBg = require('../../../public/userBg.png');
const avatar = require('../../../public/me.png');
export class UserView extends React.Component {
    constructor(props) {
        super(props);
    }
    onPressButton() {
        this.props.navigator.push({
            id: 'User',
            message: 'user page'
        });
    }
    render() {
        return (React.createElement(View, { style: [styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }] },
            React.createElement(Image, { source: avatarBg, style: [styles.avatarBg, { width: CONST.WIDTH }] }),
            React.createElement(View, { style: [styles.userBox, { position: 'absolute', left: CONST.WIDTH / 2 - 50 }] },
                React.createElement(Image, { source: avatar, style: [styles.avatar] }),
                React.createElement(Text, { style: [styles.userName] }, "sunshine")),
            React.createElement(View, { style: { backgroundColor: '#F2F2F2' } },
                React.createElement(View, { style: [styles.userInfo, { width: CONST.WIDTH }] },
                    React.createElement(TouchableOpacity, { style: [styles.userItem, { width: CONST.WIDTH / 3 }] },
                        React.createElement(Text, { style: [styles.itemText, { textAlign: 'center' }] }, "Write")),
                    React.createElement(TouchableOpacity, { style: [styles.userItem, { width: CONST.WIDTH / 3 }] },
                        React.createElement(Text, { style: [styles.itemText, { textAlign: 'center' }] }, "Has gone")),
                    React.createElement(TouchableOpacity, { style: [styles.userItem, { width: CONST.WIDTH / 3 }] },
                        React.createElement(Text, { style: [styles.itemText, { textAlign: 'center' }] }, "like"))),
                React.createElement(View, { style: styles.travelList },
                    React.createElement(TravelItem, null),
                    React.createElement(TravelItem, null))),
            React.createElement(FooterBar, { navigator: this.props.navigator })));
    }
}
const styles = StyleSheet.create({
    container: {},
    avatarBg: {
        height: 200,
    },
    userBox: {
        top: 60
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 6,
        borderColor: '#5db3e9',
        textAlign: 'center',
        justifyContent: 'center'
    },
    userName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10
    },
    userInfo: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    userItem: {
        flexDirection: 'row',
        borderRightWidth: 0.5,
        borderRightColor: '#d1d1d1',
        justifyContent: 'center',
        textAlign: 'center'
    },
    itemText: {
        fontSize: 14,
        color: '#8f8f8f',
        lineHeight: 50
    },
    travelList: {
        backgroundColor: '#fff',
        marginTop: 10
    }
});
