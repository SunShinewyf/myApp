/**
 * Copyright 2016 SunShine
 * 2016-12-21
 */
import * as React from 'react'
import { View, Text, Image, Dimensions, StyleSheet,Navigator} from 'react-native'
import { FooterBar, HeaderBar, ListItem } from '../../components'
/**定义user page的prosp数据 */
export interface travelsProps {
    navigator?: Navigator
}
/**定义user page的state数据 */
export interface travelsState {
    navigator?: any
}
export class TravelsView extends React.Component<travelsProps, travelsState>{

    constructor(props: travelsProps) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderBar />
                <View style={styles.listWrapper}>
                    <ListItem />
                </View>

                <FooterBar navigator={this.props.navigator}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        backgroundColor: '#F2F2F2'
    },
    listWrapper: {
        margin: 10,
        backgroundColor: '#fff'
    }
})