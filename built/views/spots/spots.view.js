/**
 * Copyright 2016 SunShine
 * 2016-12-28
 */
import * as React from 'react';
import { View } from 'react-native';
import { FooterBar } from '../../components';
export class SpotsView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(FooterBar, { navigator: this.props.navigator })));
    }
}
