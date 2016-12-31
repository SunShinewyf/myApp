/**
 * author:SunShinewyf
 * date:2016-12-30
 */
import * as React from 'react'
import { View, Text, Image, TouchableOpacity, Navigator, Dimensions, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'

const qqImg = require('../../../public/qq.png')
const pengyouImg = require('../../../public/pengyou.png')
const wechatImg = require('../../../public/wechat.png')
const weiboImg = require('../../../public/weibo.png')
const tiebaImg = require('../../../public/tieba.png')

export interface Props {
    isVisible: boolean,
    closeShare: () => void
}
export class Share extends React.Component<Props, any>{
    constructor(props: Props) {
        super(props)
    }
    static defaultProps = {
        isVisible: false
    };
    render() {
        return (
            this.props.isVisible ? <TouchableOpacity style={[styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }]} onPress={this.props.closeShare.bind(this)}>
                <View style={[styles.innerContainer, { width: CONST.WIDTH }]}>
                    <Text style={styles.headerText}> 分享动态到</Text>
                    <View style={[styles.linkContainer]}>
                        <TouchableOpacity style={[styles.linkItem]}>
                            <Image source={pengyouImg} style={styles.linkImg} />
                            <Text style={styles.linkText}>微信朋友圈</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.linkItem]}>
                            <Image source={wechatImg} style={styles.linkImg} />
                            <Text style={styles.linkText}>微信好友</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.linkItem]}>
                            <Image source={qqImg} style={styles.linkImg} />
                            <Text style={styles.linkText}>qq好友</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.linkItem]}>
                            <Image source={tiebaImg} style={styles.linkImg} />
                            <Text style={styles.linkText}>百度贴吧</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.linkItem]}>
                            <Image source={weiboImg} style={styles.linkImg} />
                            <Text style={styles.linkText}>新浪微博</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[styles.cancelBox]} onPress={this.props.closeShare.bind(this)}>
                        <Text style={styles.cancelText}>取消</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
                : null
        )
    }
}
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
})