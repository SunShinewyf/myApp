/**
 * author:SunShinewyf
 * date:2017-02-14
 */
import * as React from 'react';
import { connect, Provider } from 'react-redux'
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Navigator, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'

export interface settingProps {
    navigator?: Navigator
}

export interface settingState {

}

export class SettingView extends React.Component<settingProps, settingState>{
    constructor(props: settingProps) {
        super(props)
    }
    render() {
        return (
            <View style={[styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }]}>
                <View style={[{ width: CONST.WIDTH }, styles.item]}>
                    <Text style={styles.itemTitle}></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
    },
    item: {
        height: 50,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: 'red'
    },
    itemTitle: {
        paddingLeft: 10,
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center'
    }
})