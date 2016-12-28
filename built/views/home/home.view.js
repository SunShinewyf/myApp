/**
 * Copyright 2016 SunShine
 * 2016-12-19
 */
import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
import { FooterBar } from '../../components';
//页面中图片的统一引入
const bgImg = require('../../../public/home.png');
const cityImg = require('../../../public/city.png');
const mountainImg = require('../../../public/mountain.png');
const daoImg = require('../../../public/dao.png');
const meijingImg = require('../../../public/meijing.png');
const haitanImg = require('../../../public/haitan.png');
const pubuImg = require('../../../public/pubu.png');
export class HomeView extends React.Component {
    constructor(props) {
        super(props);
    }
    onPressButton() {
        this.props.navigator.push({
            id: 'User',
            message: 'user page'
        });
    }
    render() {
        return (React.createElement(View, { style: { width: CONST.WIDTH, height: CONST.HEIGHT } },
            React.createElement(Image, { source: bgImg, style: { height: CONST.HEIGHT, width: CONST.WIDTH } }),
            React.createElement(View, { style: [styles.container, { width: CONST.WIDTH }] },
                React.createElement(Text, { style: [styles.headerText] }, "Go a place you want to go"),
                React.createElement(View, { style: [styles.wrapper] },
                    React.createElement(View, { style: [styles.listItem, { backgroundColor: '#41BFF5' }] },
                        React.createElement(Image, { style: styles.innerImg, source: cityImg })),
                    React.createElement(View, { style: [styles.listItem, { backgroundColor: '#EB5B4C' }] },
                        React.createElement(Image, { style: styles.innerImg, source: mountainImg })),
                    React.createElement(View, { style: [styles.listItem, { backgroundColor: '#29BA9E' }] },
                        React.createElement(Image, { style: styles.innerImg, source: daoImg })),
                    React.createElement(View, { style: [styles.listItem, { backgroundColor: '#98A9E9' }] },
                        React.createElement(Image, { style: styles.innerImg, source: meijingImg })),
                    React.createElement(View, { style: [styles.listItem, { backgroundColor: '#AADE43' }] },
                        React.createElement(Image, { style: styles.innerImg, source: pubuImg })),
                    React.createElement(View, { style: [styles.listItem, { backgroundColor: '#F0B924' }] },
                        React.createElement(Image, { style: styles.innerImg, source: haitanImg })))),
            React.createElement(FooterBar, { navigator: this.props.navigator })));
    }
}
const styles = StyleSheet.create({
    "container": {
        "flexDirection": "column",
        "position": "absolute",
        "backgroundColor": "rgba(0,0,0,0.3)",
        "top": 120,
        "left": 0,
        "bottom": 0,
        "justifyContent": "center",
        "alignItems": "center"
    },
    "wrapper": {
        "marginTop": 20,
        "marginBottom": 20,
        "marginLeft": 10,
        "marginRight": 10,
        "flexDirection": "row",
        "flexWrap": "wrap"
    },
    "headerText": {
        "height": 50,
        "width": 300,
        "fontSize": 20,
        "color": "#fff",
        "paddingLeft": 20,
        "fontWeight": "bold",
        "lineHeight": 50,
        "marginTop": -100
    },
    "listItem": {
        "margin": 10,
        "height": 80,
        "width": 80,
        "borderRadius": 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    "listText": {
        "color": "#fff",
        "fontSize": 20
    },
    "innerImg": {
        "width": 70,
        "height": 70
    }
});
