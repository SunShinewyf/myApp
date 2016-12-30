/**
 * author:SunShinewyf
 * date:2016-12-30
 */
import * as React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'

export interface Props {
    isVisible: boolean
    closeDialog?: () => void
}

export interface States {
}
export class Dialog extends React.Component<Props, States>{
    constructor(props: Props) {
        super(props);
    }
    static defaultProps = {
        isVisible: false
    };
    render() {
        return (
            this.props.isVisible ?
                <TouchableOpacity style={[styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }]} onPress={this.props.closeDialog.bind(this)}>

                </TouchableOpacity>
                : null
        )
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
})