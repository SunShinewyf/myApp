/**
 * Copyright 2016 SunShine
 * 2016-12-20
 */
import * as React from 'react'
import { View, Text, Image, Dimensions, Navigator, StyleSheet, TouchableOpacity } from 'react-native'
import { FooterBar, TravelItem } from '../../components'
import * as CONST from '../../CONST'
import configureStore from '../../stores/userStore'

const avatarBg = require('../../../public/userBg.png')
const avatar = require('../../../public/me.png')
const cameraImg = require('../../../public/camera.png')
const locationImg = require('../../../public/location.png')
const editImg = require('../../../public/edit.png')
const settingImg = require('../../../public/setting.png')
export interface propsType {
    navigator: Navigator
}
export class UserView extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            store: configureStore(() => { this.setState({ isLoading: false }) })
        }
    }

    onPressButton() {
        this.props.navigator.push({
            id: 'User',
            message: 'user page'
        })
    }
    render() {
        return (
            <View style={[styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }]}>
                <TouchableOpacity style={[styles.settingBox]}>
                    <Image source={settingImg} style={styles.setting} />
                </TouchableOpacity>
                <Image source={avatarBg} style={[styles.avatarBg, { width: CONST.WIDTH }]} />
                <View style={[styles.userBox, { position: 'absolute', left: CONST.WIDTH / 2 - 50 }]}>
                    <Image source={avatar} style={[styles.avatar]} />
                    <Text style={[styles.userName]}>sunshine</Text>
                </View>
                <View style={{ backgroundColor: '#F2F2F2' }}>
                    <View style={[styles.userInfo, { width: CONST.WIDTH }]}>
                        <TouchableOpacity style={[styles.userItem, { width: CONST.WIDTH / 3 }]}>
                            <Image source={editImg} style={styles.itemImg} />
                            <Text style={[styles.itemText, { textAlign: 'center' }]}>Write</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.userItem, { width: CONST.WIDTH / 3 }]}>
                            <Image source={locationImg} style={styles.itemImg} />
                            <Text style={[styles.itemText, { textAlign: 'center' }]}>Has gone</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.userItem, { width: CONST.WIDTH / 3 }]}>
                            <Image source={cameraImg} style={styles.itemImg} />
                            <Text style={[styles.itemText, { textAlign: 'center' }]}>like</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.travelList}>
                        <TravelItem />
                        <TravelItem />
                    </View>
                </View>

                <FooterBar navigator={this.props.navigator} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    settingBox: {
        position: 'absolute',
        right: 15,
        top: 15,
        zIndex: 12,
    },
    setting: {
        width: 22,
        height: 22,
    },
    avatarBg: {
        zIndex: 1,
        height: 200,
    },
    userBox: {
        top: 60,
        zIndex: 12
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 6,
        borderColor: '#5db3e9',
        justifyContent: 'center'
    },
    userName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10
    },
    userInfo: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    userItem: {
        height: 50,
        flexDirection: 'row',
        borderRightWidth: 0.5,
        borderRightColor: '#d1d1d1',
        justifyContent: 'center',

    },
    itemText: {
        fontSize: 14,
        color: '#8f8f8f',
        lineHeight: 50
    },
    itemImg: {
        width: 22,
        height: 22,
        marginTop: 13,
        marginRight: 4
    },
    travelList: {
        backgroundColor: '#fff',
        marginTop: 10
    }

})