/**
 * author:SunShinewyf
 * date:2016-12-26
 */
import * as React from 'react'
import { View, Text, Image, TouchableOpacity, Navigator, Dimensions, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'
const avatar = require('../../../public/me.png')
const right = require('../../../public/round_right.png')


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
                    <Image source={right} style={[styles.rightImg]} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    listContainer: {
    },
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
})