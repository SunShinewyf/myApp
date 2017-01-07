/**
 * Copyright 2016 SunShine
 * 2016-12-28
 */
import * as React from 'react'
import { View, Text, Image, Dimensions, Navigator, StyleSheet, TouchableOpacity, Keyboard, TextInput } from 'react-native'
import { FooterBar, HeaderBar } from '../../components'
import * as CONST from '../../CONST'

export interface writeProps {
    navigator: Navigator
}
export class WriteView extends React.Component<writeProps, any>{
    constructor(props: writeProps) {
        super(props)
    }
    render() {
        return (
            <View style={[styles.writeContainer, { width: CONST.WIDTH, height: CONST.HEIGHT }]}>
                <HeaderBar title={'新建游记'} navigator={this.props.navigator} />
                <TextInput style={styles.textInput} placeholder={'来留下你的足迹吧'} />
                <FooterBar navigator={this.props.navigator} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    writeContainer: {

    },
    textInput: {
        flex: 1,
        color: '#3d3d3d',
        paddingLeft: 15,
        paddingTop: -20
    }
})