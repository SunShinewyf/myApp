/**
 * Copyright 2016 SunShine
 * 2016-12-19
 */
import * as React from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Navigator, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'
import { FooterBar } from '../../components'


//页面中图片的统一引入
const bgImg = require('../../../public/home.png')
const cityImg = require('../../../public/city.png')
const mountainImg = require('../../../public/mountain.png')
const daoImg = require('../../../public/dao.png')
const meijingImg = require('../../../public/meijing.png')
const haitanImg = require('../../../public/haitan.png')
const pubuImg = require('../../../public/pubu.png')

/**定义首页的prosp数据 */
export interface homeProps {
    navigator: Navigator;
}

/**定义首页的state数据 */
export interface homeState {
}
export class HomeView extends React.Component<homeProps, any>{

    constructor(props: homeProps) {
        super(props)
    }

    onPressButton() {
        this.props.navigator.push({
            id: 'User',
            message: 'user page'
        })
    }
    render() {
        return (
            <View style={{ width: CONST.WIDTH, height: CONST.HEIGHT }}>
                <Image source={bgImg} style={{ height: CONST.HEIGHT, width: CONST.WIDTH }} />
                <View style={[styles.container, { width: CONST.WIDTH }]}>
                    <Text style={[styles.headerText]}>Go a place you want to go</Text>
                    <View style={[styles.wrapper]}>
                        <View style={[styles.listItem, { backgroundColor: '#41BFF5' }]}>
                            <Image style={styles.innerImg} source={cityImg} />
                        </View >
                        <View style={[styles.listItem, { backgroundColor: '#EB5B4C' }]}>
                            <Image style={styles.innerImg} source={mountainImg} />
                        </View >
                        <View style={[styles.listItem, { backgroundColor: '#29BA9E' }]}>
                            <Image style={styles.innerImg} source={daoImg} />
                        </View >
                        <View style={[styles.listItem, { backgroundColor: '#98A9E9' }]}>
                            <Image style={styles.innerImg} source={meijingImg} />
                        </View >
                        <View style={[styles.listItem, { backgroundColor: '#AADE43' }]}>
                            <Image style={styles.innerImg} source={pubuImg} />
                        </View >
                        <View style={[styles.listItem, { backgroundColor: '#F0B924' }]}>
                            <Image style={styles.innerImg} source={haitanImg} />
                        </View >
                    </View>
                </View>
                <FooterBar navigator={this.props.navigator} />
            </View>
        )
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