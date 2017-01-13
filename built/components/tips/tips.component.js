/**
 * author:SunShinewyf
 * date:2016-12-30
 */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
export class Tips extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { title } = this.props;
        return (this.props.visible && React.createElement(View, { style: [styles.container, { width: CONST.WIDTH }] },
            React.createElement(Text, { style: [styles.tipText] }, title)));
    }
}
Tips.defaultProps = {
    visible: false
};
const styles = StyleSheet.create({
    container: {
        height: 40,
        position: 'absolute',
        top: 0,
        backgroundColor: 'red'
    },
    tipText: {
        color: '#333',
        lineHeight: 40,
        textAlign: 'center'
    }
});
