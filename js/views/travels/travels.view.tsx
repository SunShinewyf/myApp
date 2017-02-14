/**
 * Copyright 2016 SunShine
 * 2016-12-21
 */
import * as React from 'react'
import { connect, Provider } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, Image, Dimensions, StyleSheet, Navigator } from 'react-native'
import { SettingView } from '../../views'
import { FooterBar, HeaderBar, ListItem, Dialog, Share } from '../../components'
import * as CONST from '../../CONST'
import { travelStore } from '../../stores'
import { travelActions } from '../../actions'
const store = travelStore()

/**定义user page的prosp数据 */
export interface travelsProps {
    navigator?: Navigator

}
/**定义user page的state数据 */
export interface travelsState {
    dialogIsVisible?: boolean,
    shareIsVisible?: boolean
}

const mapDispatchProps = dispatch => ({
    actions: bindActionCreators(travelActions, dispatch)
})

@connect(state => state,mapDispatchProps)
export class TravelsView extends React.Component<travelsProps, travelsState>{

    constructor(props: travelsProps) {
        super(props)
        this.state = {
            dialogIsVisible: false,
            shareIsVisible: false
        }
    }
    /**
     *open dialog
     */
    openDialog = () => {
        this.setState({
            dialogIsVisible: true
        })
    }
    /**
     *close dialog
     */
    closeDialog = () => {
        this.setState({
            dialogIsVisible: false
        })
    }
    /**
     *openShare
     */
    openShare = () => {
        this.setState({
            shareIsVisible: true
        })
    }
    /**
     *close share
     */
    closeShare = () => {
        this.setState({
            shareIsVisible: false
        })
    }
    render() {
        return (
            <Provider store={store}>
                <View style={[styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }]}>
                    <HeaderBar title={'游记列表'} navigator={this.props.navigator} onPress={this.openDialog} />
                    <View style={styles.listWrapper}>
                        <ListItem share={this.openShare} />
                        <ListItem />
                    </View>
                    <Dialog isVisible={this.state.dialogIsVisible} closeDialog={this.closeDialog} />
                    <Share isVisible={this.state.shareIsVisible} closeShare={this.closeShare} />
                    <FooterBar navigator={this.props.navigator} />
                </View>
            </Provider>
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
