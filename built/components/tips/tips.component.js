/**
 * author:SunShinewyf
 * date:2016-12-30
 */
import * as React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import * as CONST from '../../CONST';
export class Tips extends React.Component {
    constructor(props) {
        super(props);
        this.opacityValue = new Animated.Value(0);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.visible !== nextProps.visible && nextProps.visible) {
            Animated.timing(this.opacityValue, { toValue: 0, duration: 300 }).start();
        }
    }
    render() {
        let { title } = this.props;
        return (this.props.visible && React.createElement(Animated.View, null,
            React.createElement(View, { style: [styles.container, { width: CONST.WIDTH }] },
                React.createElement(Text, { style: [styles.tipText] }, title)),
            " "));
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
