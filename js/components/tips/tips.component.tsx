/**
 * author:SunShinewyf
 * date:2016-12-30
 */

import * as React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native'
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
    private opacityValue: Animated.Value = new Animated.Value(0)
    componentWillReceiveProps(nextProps: tipsProps) {
        if (this.props.visible !== nextProps.visible && nextProps.visible) {
            Animated.timing(this.opacityValue, { toValue: 0, duration: 300 }).start()
        }
    }
    static defaultProps = {
        visible: false
    };
    render() {
        let {title} = this.props
        return (
            this.props.visible && <Animated.View><View style={[styles.container, { width: CONST.WIDTH }]}>
                <Text style={[styles.tipText]}>{title}</Text>
            </View > </Animated.View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 40,
        position: 'absolute',
        top: 0,
        backgroundColor: 'red'
    },
    tipText: {
        color: '#333',
        lineHeight: 40,
        textAlign: 'center'
    }
})