/**
 * Copyright 2016 SunShine
 * 2016-12-21
 */
import * as React from 'react';
import { View, Text } from 'react-native';
export class WriteView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(Text, null, "this is the user page")));
    }
}
