/**
 * author:SunShinewyf
 * date:2017-01-02
 */
import * as React from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Navigator, StyleSheet, } from 'react-native'
import * as CONST from '../../CONST'
import { FooterBar } from '../../components'

const bgImg = require('../../../public/loginBg.png')
export interface loginProps {
    navitgator?: Navigator
}
export class LoginView extends React.Component<loginProps, any>{
    constructor(props: loginProps) {
        super(props)
    }

    render() {
        return (
            <View style={[styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }]}>
                <Image source={bgImg} style={{ width: CONST.WIDTH, height: 250}} />
                <View style={[styles.innerContainer]}>
                    <TextInput
                        style={styles.input} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff'
    },
    innerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    input: {
        width: 200,
        height: 45,
    }
})