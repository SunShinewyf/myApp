/**
 * author:SunShinewyf
 * date:2016-12-26
 */
import * as React from 'react'
import { View, Text, Image, TouchableOpacity, Navigator, Dimensions, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'
const avatar = require('../../../public/me.png')
const right = require('../../../public/round_right.png')
const like = require('../../../public/appreciate_light.png')
const share = require('../../../public/forward.png')
const comment = require('../../../public/comment_light.png')


export class ListItem extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View style={styles.listContainer}>
                <View style={[styles.userInfo]}>
                    <Image source={avatar} style={styles.avatar} />
                    <View>
                        <Text style={styles.userName}>SunShinewyf</Text>
                        <Text style={styles.date}>2016-12-15</Text>
                    </View>
                    <TouchableOpacity style={[styles.rightImgBox]}>
                        <Image source={right} style={[styles.rightImg]} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.contentBox}>
                    <Text style={[styles.content]}>靠谱之人，首先会守时。守时，代表了对约定的重视，对时间的珍视，以及对约定时间所要做的事情的重视，是职业道德的基本要求，也是对自己信誉负责的表现</Text>
                </TouchableOpacity>
                <View style={[styles.actionBox, { width: CONST.WIDTH - 20 }]}>
                    <TouchableOpacity style={[styles.actionItem, { width: (CONST.WIDTH - 20) / 3 }]}>
                        <Image source={share} style={styles.actionImg}></Image>
                        <Text style={styles.actionText}>分享</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionItem, { width: (CONST.WIDTH - 20) / 3 }]}>
                        <Image source={comment} style={styles.actionImg}></Image>
                        <Text style={styles.actionText}>评论</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionItem, { width: (CONST.WIDTH - 20) / 3 }]}>
                        <Image source={like} style={styles.actionImg}></Image>
                        <Text style={styles.actionText}>点赞</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
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
})