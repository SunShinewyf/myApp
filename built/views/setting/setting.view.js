/**
 * author:SunShinewyf
 * date:2017-02-14
 */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
export class SettingView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: [styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }] },
            React.createElement(View, { style: [{ width: CONST.WIDTH }, styles.item] },
                React.createElement(Text, { style: styles.itemTitle }))));
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
    },
    item: {
        height: 50,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: 'red'
    },
    itemTitle: {
        paddingLeft: 10,
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
