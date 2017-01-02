/**
 * Copyright 2016 SunShine
 * 2017-1-1
 */
import * as React from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Navigator, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'
import { HeaderBar } from '../../components'

export interface detailProps {
    navigator: Navigator,
    title?: string
}
export class DetailView extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View style={[styles.detailContainer, { width: CONST.WIDTH, height: CONST.HEIGHT }]}>
                <HeaderBar navigator={this.props.navigator} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{'马来西亚'}</Text>
                    <Text style={[styles.content]}>{'约教学成本，一个老师身兼多职，一个老师教好几课，有些还不是学这个专业的，真为我们自己担心。'}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    detailContainer: {
        backgroundColor: '#fff',
    },
    contentContainer: {
        margin: 10,
    },
    title: {
        fontSize: 20,
    },
    content: {
        paddingTop: 20,
        textAlign: 'justify',
        lineHeight: 24
    }
})