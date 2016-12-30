/**
 * Copyright 2016 SunShine
 * 2016-12-28
 */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { FooterBar, HeaderBar } from '../../components';
import * as CONST from '../../CONST';
export class WriteView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: [styles.writeContainer, { width: CONST.WIDTH, height: CONST.HEIGHT }] },
            React.createElement(HeaderBar, { title: '新建游记', navigator: this.props.navigator }),
            React.createElement(FooterBar, { navigator: this.props.navigator })));
    }
}
const styles = StyleSheet.create({
    writeContainer: {}
});
