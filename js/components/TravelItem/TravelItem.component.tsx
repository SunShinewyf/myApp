/**
 * author:SunShinewyf
 * date:2016-12-25
 */
import * as React from 'react'
import { View, Text, Image, TouchableOpacity, Navigator, Dimensions, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'

const gzImg = require('../../../public/gz.png')
const likeImg = require('../../../public/appreciate_light.png')
const likedImg = require('../../../public/appreciate_fill_light.png')
const commentImg = require('../../../public/comment_light.png')

export class TravelItem extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <View style={[styles.itemWrapper, { width: CONST.WIDTH - 22 }]}>
                <Image source={gzImg} style={styles.leftImg} />
                <View style={[styles.rightInfo]}>
                    <View style={[styles.detail]}>
                        <Text style={styles.placeName}>广州</Text>
                        <Text style={[styles.date]}>2016-11-11</Text>
                    </View>
                    <TouchableOpacity style={[styles.contentBox, { width: CONST.WIDTH - 120 }]}>
                        <Text style={[styles.content]}>广州塔又称广州新电视塔，昵称小蛮腰，位于中国广州市海珠区</Text>
                    </TouchableOpacity>
                    <View style={[styles.action]}>
                        <TouchableOpacity style={[styles.actionType]}>
                            <Image source={likeImg} style={[styles.itemImg, { height: 20, width: 20 }]} />
                            <Text style={styles.actionText}>喜欢</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.actionType, { marginLeft: 10 }]}>
                            <Image source={commentImg} style={styles.itemImg} />
                            <Text style={styles.actionText}>评论</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemWrapper: {
        height: 120,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    leftImg: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#5db3e9',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    rightInfo: {
        flexDirection: 'column',
        marginRight: 10
    },
    placeName: {
        color: '#999',
        fontSize: 14,
        paddingTop: 10,
    },
    detail: {
        flexDirection: 'row',
    },
    date: {
        color: '#999',
        fontSize: 13,
        position: 'absolute',
        top: 10,
        right: 10
    },
    contentBox: {
        marginRight: 10,
    },
    content: {
        fontSize: 14,
        color: '#697277',
        lineHeight: 24,
        textAlign: 'justify',
    },
    action: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    actionType: {
        flexDirection: 'row'
    },
    itemImg: {
        height: 22,
        width: 22,
    },
    actionText: {
        paddingTop: 5,
        paddingLeft: 4,
        color: '#999',
        fontSize: 12
    }
})