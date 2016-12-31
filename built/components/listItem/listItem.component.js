/**
 * author:SunShinewyf
 * date:2016-12-26
 */
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
const avatar = require('../../../public/me.png');
const right = require('../../../public/round_right.png');
const like = require('../../../public/appreciate_light.png');
const share = require('../../../public/forward.png');
const comment = require('../../../public/comment_light.png');
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
                React.createElement(TouchableOpacity, { style: [styles.rightImgBox] },
                    React.createElement(Image, { source: right, style: [styles.rightImg] }))),
            React.createElement(TouchableOpacity, { style: styles.contentBox },
                React.createElement(Text, { style: [styles.content] }, "\u9760\u8C31\u4E4B\u4EBA\uFF0C\u9996\u5148\u4F1A\u5B88\u65F6\u3002\u5B88\u65F6\uFF0C\u4EE3\u8868\u4E86\u5BF9\u7EA6\u5B9A\u7684\u91CD\u89C6\uFF0C\u5BF9\u65F6\u95F4\u7684\u73CD\u89C6\uFF0C\u4EE5\u53CA\u5BF9\u7EA6\u5B9A\u65F6\u95F4\u6240\u8981\u505A\u7684\u4E8B\u60C5\u7684\u91CD\u89C6\uFF0C\u662F\u804C\u4E1A\u9053\u5FB7\u7684\u57FA\u672C\u8981\u6C42\uFF0C\u4E5F\u662F\u5BF9\u81EA\u5DF1\u4FE1\u8A89\u8D1F\u8D23\u7684\u8868\u73B0")),
            React.createElement(View, { style: [styles.actionBox, { width: CONST.WIDTH - 20 }] },
                React.createElement(TouchableOpacity, { style: [styles.actionItem, { width: (CONST.WIDTH - 20) / 3 }], onPress: this.props.share },
                    React.createElement(Image, { source: share, style: styles.actionImg }),
                    React.createElement(Text, { style: styles.actionText }, "\u5206\u4EAB")),
                React.createElement(TouchableOpacity, { style: [styles.actionItem, { width: (CONST.WIDTH - 20) / 3 }] },
                    React.createElement(Image, { source: comment, style: styles.actionImg }),
                    React.createElement(Text, { style: styles.actionText }, "\u8BC4\u8BBA")),
                React.createElement(TouchableOpacity, { style: [styles.actionItem, { width: (CONST.WIDTH - 20) / 3 }] },
                    React.createElement(Image, { source: like, style: styles.actionImg }),
                    React.createElement(Text, { style: styles.actionText }, "\u70B9\u8D5E")))));
    }
}
const styles = StyleSheet.create({
    listContainer: {
        borderWidth: 1,
        borderColor: '#d0d4d7',
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    userInfo: {
        flexDirection: 'row',
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d0d4d7'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 2.5
    },
    userName: {
        fontSize: 20,
        color: '#2a8ae0',
        lineHeight: 40,
        paddingLeft: 30
    },
    date: {
        paddingLeft: 30,
        color: '#999',
        paddingBottom: 10
    },
    rightImgBox: {
        position: 'absolute',
        right: 0,
        top: 15
    },
    rightImg: {
        width: 30,
        height: 30,
    },
    contentBox: {
        margin: 10,
        marginTop: 0,
    },
    content: {
        color: '#697277',
        lineHeight: 24,
        fontSize: 14,
        textAlign: 'justify'
    },
    actionBox: {
        borderTopWidth: 1,
        borderTopColor: '#d0d4d7',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    actionItem: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionImg: {
        width: 22,
        height: 22
    },
    actionText: {
        color: '#a7acb0',
        fontSize: 13
    }
});
