/**
 * author:SunShinewyf
 * date:2016-12-30
 */

import * as React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'

export interface tipsProps {
    title?: string
    visible?: boolean
}
export interface tipsState {

}
export class Tips extends React.Component<tipsProps, tipsState>{
    constructor(props: tipsProps) {
        super(props)
    }
    render() {
        let {title} = this.props
        return (
            <View style={[styles.container, { width: CONST.WIDTH }]}>
                <Text style={[styles.tipText]}>{title}</Text>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 40,
        position: 'absolute',
        top: 0,
        background: 'red'
    },
    tipText: {
        color: '#333',
        lineHeight: 40,
        textAlign: 'center'
    }
})