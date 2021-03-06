/**
 * author:SunShinewyf
 * date:2016-12-22
 */
/// <references file="../../../typings/globals/react/index.d.ts" />
import * as React from 'react'
import { View, Text, Image, Touchable, TouchableOpacity, Navigator, Dimensions, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'
import { HomeView } from '../../views/home/home.view'
import { SpotsView } from '../../views/spots/spots.view'
import { TravelsView } from '../../views/travels/travels.view'
import { WriteView } from '../../views/write/write.view'
import { UserView } from '../../views/user/user.view'

/**图片的统一引入 */
const homeImg = require('../../../public/index.png')
const spotsImg = require('../../../public/spots.png')
const writeImg = require('../../../public/write.png')
const travelImg = require('../../../public/travels.png')
const userImg = require('../../../public/user.png')

export interface propsType {
    navigator?: Navigator
}
export class FooterBar extends React.Component<propsType, any>{
    constructor(props: propsType) {
        super(props);
    }

    /**
     *页面跳转
     */
    _navigator = (id: string, message: string) => {
        this.props.navigator.push({
            id: id,
            params: {
                message: message
            }
        })
    }

    render() {
        return (
            <View style={[styles.footerBarContainer, { width: CONST.WIDTH }]}>
                <TouchableOpacity style={[styles.footerBarItem, { width: CONST.WIDTH / 5 }]} onPress={() => this._navigator('Home', 'home page')}>
                    <Image source={homeImg} style={styles.itemImg} />
                    <Text style={styles.itemText}>首页</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.footerBarItem, { width: CONST.WIDTH / 5 }]} onPress={() => this._navigator('Spots', 'spot page')}>
                    <Image source={spotsImg} style={styles.itemImg} />
                    <Text style={styles.itemText}>景点</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.footerBarItem, { width: CONST.WIDTH / 5 }]} onPress={() => this._navigator('Write', 'write page')}>
                    <Image source={writeImg} style={styles.itemImg} />
                    <Text style={styles.itemText}>记录</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.footerBarItem, { width: CONST.WIDTH / 5 }]} onPress={() => this._navigator('Travels', 'travel page')}>
                    <Image source={travelImg} style={styles.itemImg} />
                    <Text style={styles.itemText}>游记</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.footerBarItem, { width: CONST.WIDTH / 5 }]} onPress={() => this._navigator('User', 'user page')}>
                    <Image source={userImg} style={styles.itemImg} />
                    <Text style={styles.itemText}>我的</Text>
                </TouchableOpacity>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    footerBarContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: 60,
        backgroundColor: '#fff',
        zIndex: 2
    },
    footerBarItem: {
        height: 60,
        justifyContent: 'center',
        marginLeft: 0.5
    },
    itemImg: {
        width: 30,
        height: 30,
        marginLeft: 20
    },

    itemText: {
        color: '#ccc',
        fontSize: 12,
        paddingLeft: 22,
        paddingTop: 4,
    }
})