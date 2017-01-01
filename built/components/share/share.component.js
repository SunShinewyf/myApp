/**
 * author:SunShinewyf
 * date:2016-12-30
 */
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
/**引入图片 */
const qqImg = require('../../../public/qq.png');
const pengyouImg = require('../../../public/pengyou.png');
const wechatImg = require('../../../public/wechat.png');
const weiboImg = require('../../../public/weibo.png');
const tiebaImg = require('../../../public/tieba.png');
const shareLinks = [
    { text: '微信朋友圈', img: pengyouImg },
    { text: '微信好友', img: wechatImg },
    { text: 'qq好友', img: qqImg },
    { text: '百度贴吧', img: tiebaImg },
    { text: '新浪微博', img: weiboImg },
];
export class Share extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let linksRender = shareLinks.map((item, index) => {
            return (React.createElement(TouchableOpacity, { style: [styles.linkItem], key: index },
                React.createElement(Image, { source: item.img, style: styles.linkImg }),
                React.createElement(Text, { style: styles.linkText }, item.text)));
        });
        return (this.props.isVisible ? React.createElement(TouchableOpacity, { style: [styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }], onPress: this.props.closeShare.bind(this) },
            React.createElement(View, { style: [styles.innerContainer, { width: CONST.WIDTH }] },
                React.createElement(Text, { style: styles.headerText }, " \u5206\u4EAB\u52A8\u6001\u5230"),
                React.createElement(View, { style: [styles.linkContainer] }, linksRender),
                React.createElement(TouchableOpacity, { style: [styles.cancelBox], onPress: this.props.closeShare.bind(this) },
                    React.createElement(Text, { style: styles.cancelText }, "\u53D6\u6D88"))))
            : null);
    }
}
Share.defaultProps = {
    isVisible: false
};
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 20
    },
    innerContainer: {
        backgroundColor: '#fff',
        height: 280,
        position: 'absolute',
        bottom: 0
    },
    headerText: {
        paddingLeft: 10,
        paddingTop: 20,
        color: '#666',
        fontSize: 14
    },
    linkContainer: {
        flexDirection: 'row',
        flex: 1,
        margin: 15,
        flexWrap: 'wrap',
        height: 150
    },
    linkItem: {
        width: 70,
        height: 50,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    linkImg: {
        width: 30,
        height: 30
    },
    linkText: {
        color: '#666',
        fontSize: 12,
        paddingTop: 10
    },
    cancelBox: {
        height: 50,
        borderTopColor: '#d0d4d7',
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelText: {
        fontSize: 18,
        color: '#2a8ae0'
    }
});
