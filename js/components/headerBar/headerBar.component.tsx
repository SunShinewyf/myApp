/**
 * author:SunShinewyf
 * date:2016-12-22
 */
import * as React from 'react'
import { View, Text, Image, TouchableOpacity, Navigator, Dimensions, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'

const backImg = require('../../../public/pull_left.png')
const moreImg = require('../../../public/more.png')

/**定义组件props */
export interface headerProps {
    title: string,
    bgColor: string
}

export class HeaderBar extends React.Component<any, any>{
    constructor(props: headerProps) {
        super(props)
    }
    render() {
        return (
            <View style={[styles.headerWrapper, { width: CONST.WIDTH }]}>
                <Image source={backImg} style={styles.backImg} />
                <View style={[styles.titleBox]}>
                    <Text style={[styles.headerText, { textAlign: 'center' }]}>用户中心</Text>
                </View>
                <Image source={moreImg} style={styles.moreImg} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapper: {
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#2a8ae0',
    },
    backImg: {
        width: 22,
        height: 22,
        marginTop: 40,
        marginLeft: 15,
    },
    titleBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginTop: 30,
    },
    headerText: {
        fontSize: 15,
        color: '#d0d4d7',
        textAlign: 'center',
    },
    moreImg: {
        width: 22,
        height: 22,
        marginTop: 40,
        marginRight: 15
    }
})