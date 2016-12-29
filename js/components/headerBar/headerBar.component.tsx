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
    title?: string,
    navigator?: Navigator
}

export  class HeaderBar extends React.Component<headerProps, any>{

    constructor(props: headerProps) {
        super(props)
    }
    static defaultProps = {

    };
    /**
     *回退函数
     */
    _pressBack() {
        const {navigator} = this.props
        navigator.pop()
    }

    render() {
        const {title} = this.props
        return (
            <View style={[styles.headerWrapper, { width: CONST.WIDTH }]}>
                <TouchableOpacity style={{ marginTop: 40, marginLeft: 15 }} onPress={this._pressBack.bind(this)}>
                    <Image source={backImg} style={styles.headerImg} />
                </TouchableOpacity>
                <View style={[styles.titleBox]}>
                    <Text style={[styles.headerText, { textAlign: 'center' }]}>{title}</Text>
                </View>
                <TouchableOpacity style={{ marginTop: 40, marginRight: 15 }} onPress={this._pressBack.bind(this)}>
                    <Image source={moreImg} style={styles.headerImg} />
                </TouchableOpacity>
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
    headerImg: {
        width: 22,
        height: 22,
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
})