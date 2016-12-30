/**
 * author:SunShinewyf
 * date:2016-12-22
 */
/// <references file="../../../typings/globals/react/index.d.ts" />
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
/**图片的统一引入 */
const homeImg = require('../../../public/index.png');
const spotsImg = require('../../../public/spots.png');
const writeImg = require('../../../public/write.png');
const travelImg = require('../../../public/travels.png');
const userImg = require('../../../public/user.png');
export class FooterBar extends React.Component {
    constructor(props) {
        super(props);
        /**
         *页面跳转
         */
        this._navigator = (id, message) => {
            this.props.navigator.push({
                id: id,
                params: {
                    message: message
                }
            });
        };
    }
    render() {
        return (React.createElement(View, { style: [styles.footerBarContainer, { width: CONST.WIDTH }] },
            React.createElement(TouchableOpacity, { style: [styles.footerBarItem, { width: CONST.WIDTH / 5 }], onPress: () => this._navigator('Home', 'home page') },
                React.createElement(Image, { source: homeImg, style: styles.itemImg }),
                React.createElement(Text, { style: styles.itemText }, "\u9996\u9875")),
            React.createElement(TouchableOpacity, { style: [styles.footerBarItem, { width: CONST.WIDTH / 5 }], onPress: () => this._navigator('Spots', 'spot page') },
                React.createElement(Image, { source: spotsImg, style: styles.itemImg }),
                React.createElement(Text, { style: styles.itemText }, "\u666F\u70B9")),
            React.createElement(TouchableOpacity, { style: [styles.footerBarItem, { width: CONST.WIDTH / 5 }], onPress: () => this._navigator('Write', 'write page') },
                React.createElement(Image, { source: writeImg, style: styles.itemImg }),
                React.createElement(Text, { style: styles.itemText }, "\u8BB0\u5F55")),
            React.createElement(TouchableOpacity, { style: [styles.footerBarItem, { width: CONST.WIDTH / 5 }], onPress: () => this._navigator('Travels', 'travel page') },
                React.createElement(Image, { source: travelImg, style: styles.itemImg }),
                React.createElement(Text, { style: styles.itemText }, "\u6E38\u8BB0")),
            React.createElement(TouchableOpacity, { style: [styles.footerBarItem, { width: CONST.WIDTH / 5 }], onPress: () => this._navigator('User', 'user page') },
                React.createElement(Image, { source: userImg, style: styles.itemImg }),
                React.createElement(Text, { style: styles.itemText }, "\u6211\u7684"))));
    }
}
const styles = StyleSheet.create({
    footerBarContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: 60,
        backgroundColor: '#fff',
    },
    footerBarItem: {
        height: 60,
        justifyContent: 'center',
        marginLeft: 0.5
    },
    itemImg: {
        width: 30,
        height: 30,
        marginLeft: 20
    },
    itemText: {
        color: '#ccc',
        fontSize: 12,
        paddingLeft: 22,
        paddingTop: 4,
    }
});
