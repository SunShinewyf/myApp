/**
 * author:SunShinewyf
 * date:2016-12-30
 */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
export class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (this.props.isVisible ?
            React.createElement(View, { style: [styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }] })
            : null);
    }
}
Dialog.defaultProps = {
    isVisible: false
};
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
});
