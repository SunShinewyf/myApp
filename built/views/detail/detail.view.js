/**
 * Copyright 2016 SunShine
 * 2017-1-1
 */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
import { HeaderBar } from '../../components';
export class DetailView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: [styles.detailContainer, { width: CONST.WIDTH, height: CONST.HEIGHT }] },
            React.createElement(HeaderBar, { navigator: this.props.navigator }),
            React.createElement(View, { style: styles.contentContainer },
                React.createElement(Text, { style: styles.title }, '马来西亚'),
                React.createElement(Text, { style: [styles.content] }, '约教学成本，一个老师身兼多职，一个老师教好几课，有些还不是学这个专业的，真为我们自己担心。'))));
    }
}
const styles = StyleSheet.create({
    detailContainer: {
        backgroundColor: '#fff',
    },
    contentContainer: {
        margin: 10,
    },
    title: {
        fontSize: 20,
    },
    content: {
        paddingTop: 20,
        textAlign: 'justify',
        lineHeight: 24
    }
});
