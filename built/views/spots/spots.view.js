/**
 * Copyright 2016 SunShine
 * 2016-12-28
 */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { FooterBar, HeaderBar, SpotsList } from '../../components';
import * as CONST from '../../CONST';
export class SpotsView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: [styles.spotContainer, { width: CONST.WIDTH, height: CONST.HEIGHT }] },
            React.createElement(HeaderBar, { title: '景点列表' }),
            React.createElement(SpotsList, null),
            React.createElement(FooterBar, { navigator: this.props.navigator })));
    }
}
const styles = StyleSheet.create({
    spotContainer: {
        backgroundColor: '#e9e9e9'
    }
});
