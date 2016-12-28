/**
 * author:SunShinewyf
 * date:2016-12-22
 */
import * as React from 'react'
import { View, Text, Image, TouchableOpacity, Navigator, Dimensions, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'

const backImg = require('../../../public/back.ios.png')

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
                <Text style={[styles.headerText, { textAlign: 'center' }]}>用户中心</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapper: {
        height: 70,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'pink',
        backgroundColor: '#fff'
    },
    backImg: {
        marginTop: 40,
        marginLeft: 15,
    },
    headerText: {
        fontSize: 20,
        color: '#666',
        paddingTop: 40,
    }
})