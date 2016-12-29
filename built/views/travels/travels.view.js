/**
 * Copyright 2016 SunShine
 * 2016-12-21
 */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { FooterBar, HeaderBar, ListItem } from '../../components';
import * as CONST from '../../CONST';
export class TravelsView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: [styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }] },
            React.createElement(HeaderBar, { title: '游记列表', navigator: this.props.navigator }),
            React.createElement(View, { style: styles.listWrapper },
                React.createElement(ListItem, null),
                React.createElement(ListItem, null)),
            React.createElement(FooterBar, { navigator: this.props.navigator })));
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
});
