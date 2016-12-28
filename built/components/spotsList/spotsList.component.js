/**
 * author:SunShinewyf
 * date:2016-12-28
 */
import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const spotImg = require('../../../public/youhua.png');
const right = require('../../../public/round_right.png');
export class SpotsList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: [styles.container] },
            React.createElement(Image, { source: spotImg, style: styles.spotImg }),
            React.createElement(View, null,
                React.createElement(Text, { style: styles.headerText }, "China"),
                React.createElement(Text, { style: styles.content }, "this is a test")),
            React.createElement(Image, { source: right, style: styles.rightImg })));
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 100,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    spotImg: {
        width: 70,
        height: 70,
        margin: 15
    },
    headerText: {
        color: '#959595',
        fontSize: 20,
        marginTop: 10
    },
    content: {
        color: '#cfcfcf',
        fontSize: 14
    },
    rightImg: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 35,
        right: 10
    },
});
