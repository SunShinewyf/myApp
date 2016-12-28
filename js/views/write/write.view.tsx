/**
 * Copyright 2016 SunShine
 * 2016-12-28
 */
import * as React from 'react'
import { View, Text, Image, Dimensions, Navigator, StyleSheet, TouchableOpacity } from 'react-native'
import { FooterBar } from '../../components'
import * as CONST from '../../CONST'

export interface writeProps{
    navigator:Navigator
}
export class WriteView extends React.Component<writeProps, any>{
    constructor(props: writeProps) {
        super(props)
    }
    render() {
        return (
            <View>
                <FooterBar navigator={this.props.navigator}/>
            </View>
        )
    }
}