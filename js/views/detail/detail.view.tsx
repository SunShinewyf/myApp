/**
 * Copyright 2016 SunShine
 * 2017-1-1
 */
import * as React from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Navigator, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'
import { HeaderBar } from '../../components'

export interface detailProps {
    navigator: Navigator
}
export class DetailView extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View style={[styles.detailContainer, { width: CONST.WIDTH, height: CONST.HEIGHT }]}>
                <HeaderBar navigator={this.props.navigator} />
                <Text>this is the detail view</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    detailContainer: {

    }
})