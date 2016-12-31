/**
 * Copyright 2016 SunShine
 * 2016-12-21
 */
import * as React from 'react'
import { View, Text, Image, Dimensions, StyleSheet, Navigator } from 'react-native'
import { FooterBar, HeaderBar, ListItem, Dialog, Share } from '../../components'
import * as CONST from '../../CONST'
/**定义user page的prosp数据 */
export interface travelsProps {
    navigator?: Navigator
}
/**定义user page的state数据 */
export interface travelsState {
    isVisible: boolean
}
export class TravelsView extends React.Component<travelsProps, travelsState>{

    constructor(props: travelsProps) {
        super(props)
        this.state = {
            isVisible: false
        }
    }
    /**
     *open dialog
     */
    openDialog = () => {
        this.setState({
            isVisible: true
        })
    }
    /**
     *close dialog
     */
    closeDialog = () => {
        this.setState({
            isVisible: false
        })
    }
    render() {
        return (
            <View style={[styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }]}>
                <HeaderBar title={'游记列表'} navigator={this.props.navigator} onPress={this.openDialog} />
                <View style={styles.listWrapper}>
                    <ListItem />
                    <ListItem />
                </View>
                <Dialog isVisible={this.state.isVisible} closeDialog={this.closeDialog} />
                <Share />
                <FooterBar navigator={this.props.navigator} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
    },
    listWrapper: {
        margin: 10,
        backgroundColor: '#F2F2F2'
    }
})