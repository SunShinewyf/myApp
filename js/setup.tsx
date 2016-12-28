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
import { HomeView, SpotsView, TravelsView, WriteView, UserView } from './views'

class myApp extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    /**
     *页面跳转
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
                    <SpotsView {...route.params} navigator={navigator} />
                )
            case 'Travels':
                return (
                    <TravelsView {...route.params} navigator={navigator} />
                )
            case 'Write':
                return (
                    <WriteView {...route.params} navigator={navigator} />
                )
            case 'User':
                return (
                    <UserView {...route.params} navigator={navigator} />
                )
        }
    }


    render() {
        return (
            <Navigator
                initialRoute={{ id: 'Travels', params: { message: 'travel页面' } }}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig
                    }
                    return Navigator.SceneConfigs.FloatFromBottom
                } }
                renderScene={(route,navigator) => this.renderView(route, navigator)}
                />
        )
    }
}

export default () => myApp