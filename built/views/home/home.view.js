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
const treeImg = require('../../../public/tree.png');
const weatherImg = require('../../../public/weather.png');
const pictureImg = require('../../../public/picture.png');
const placeImg = require('../../../public/place.png');
const settingImg = require('../../../public/setting.png');
const zujiImg = require('../../../public/zuji.png');
const home = require('../../../public/img@3x.png');
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
                        React.createElement(Image, { style: styles.innerImg, source: treeImg })),
                    React.createElement(View, { style: [styles.listItem, { backgroundColor: '#EB5B4C' }] },
                        React.createElement(Image, { style: [styles.innerImg, { marginLeft: 2 }], source: placeImg })),
                    React.createElement(View, { style: [styles.listItem, { backgroundColor: '#29BA9E' }] },
                        React.createElement(Image, { style: styles.innerImg, source: weatherImg })),
                    React.createElement(View, { style: [styles.listItem, { backgroundColor: '#98A9E9' }] },
                        React.createElement(Image, { style: [styles.innerImg, { marginLeft: 1 }], source: pictureImg })),
                    React.createElement(View, { style: [styles.listItem, { backgroundColor: '#AADE43' }] },
                        React.createElement(Image, { style: styles.innerImg, source: zujiImg })),
                    React.createElement(View, { style: [styles.listItem, { backgroundColor: '#F0B924' }] },
                        React.createElement(Image, { style: styles.innerImg, source: settingImg })))),
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
        "borderRadius": 40
    },
    "listText": {
        "color": "#fff",
        "fontSize": 20
    },
    "innerImg": {
        "width": 80,
        "height": 80
    }
});
