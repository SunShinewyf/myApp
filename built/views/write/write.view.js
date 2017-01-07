/**
 * Copyright 2016 SunShine
 * 2016-12-28
 */
import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { FooterBar, HeaderBar } from '../../components';
import * as CONST from '../../CONST';
export class WriteView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: [styles.writeContainer, { width: CONST.WIDTH, height: CONST.HEIGHT }] },
            React.createElement(HeaderBar, { title: '新建游记', navigator: this.props.navigator }),
            React.createElement(TextInput, { style: styles.textInput, placeholder: '来留下你的足迹吧' }),
            React.createElement(FooterBar, { navigator: this.props.navigator })));
    }
}
const styles = StyleSheet.create({
    writeContainer: {},
    textInput: {
        flex: 1,
        color: '#3d3d3d',
        paddingLeft: 15,
        paddingTop: -20
    }
});
