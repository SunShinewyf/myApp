/**
 * Copyright 2016 SunShine
 * 2016-12-18
 */

import * as React from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    NavigatorIOS
} from 'react-native';
import { HomeView, SpotsView, TravelsView, WriteView, UserView, DetailView, LoginView } from './views'

class myApp extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }

    /**
    * 通过设置不同参数跳转不同页面
    * @param route 路由
    * @param navigator 导航器
    */
    renderView(route: any, navigator: any) {
        let routeId = route.id;
        switch (routeId) {
            case 'Home':
                return (
                    <HomeView navigator={navigator} />
                );
            case 'Spots':
                return (
                    <SpotsView navigator={navigator} />
                )
            case 'Travels':
                return (
                    <TravelsView navigator={navigator} />
                )
            case 'Write':
                return (
                    <WriteView navigator={navigator} />
                )
            case 'User':
                return (
                    <UserView navigator={navigator} />
                )
        }
    }


    render() {
        return (
            <Navigator
                initialRoute={{ id: 'Home', params: { message: 'home首页' } }}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig
                    }
                    return Navigator.SceneConfigs.FloatFromRight
                } }
                renderScene={this.renderView}
                />
        )
    }
}
export default () => myApp