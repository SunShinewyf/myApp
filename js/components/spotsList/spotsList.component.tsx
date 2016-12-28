/**
 * author:SunShinewyf
 * date:2016-12-28
 */
import * as React from 'react'
import { View, Text, Image, TouchableOpacity, Navigator, Dimensions, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'
const spotImg = require('../../../public/youhua.png')
const right = require('../../../public/round_right.png')

export class SpotsList extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View style={[styles.container]}>
                <Image source={spotImg} style={styles.spotImg} />
                <View>
                    <Text style={styles.headerText}>China</Text>
                    <Text style={styles.content}>this is a test</Text>
                </View>
                <Image source={right} style={styles.rightImg} />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 100,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    spotImg: {
        width: 70,
        height: 70,
        margin: 15
    },
    headerText: {
        color: '#959595',
        fontSize: 20,
        marginTop: 10
    },
    content: {
        color: '#cfcfcf',
        fontSize: 14
    },
    rightImg: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 35,
        right: 10
    },
})