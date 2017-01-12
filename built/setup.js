/**
 * Copyright 2016 SunShine
 * 2016-12-18
 */
import * as React from "react";
import { Navigator } from 'react-native';
import { SpotsView, TravelsView, WriteView, UserView, LoginView } from './views';
class myApp extends React.Component {
    constructor(props) {
        super(props);
    }
    /**
    * 通过设置不同参数跳转不同页面
    * @param route 路由
    * @param navigator 导航器
    */
    renderView(route, navigator) {
        let routeId = route.id;
        switch (routeId) {
            case 'Login':
                return (React.createElement(LoginView, { navigator: navigator }));
            case 'Spots':
                return (React.createElement(SpotsView, { navigator: navigator }));
            case 'Travels':
                return (React.createElement(TravelsView, { navigator: navigator }));
            case 'Write':
                return (React.createElement(WriteView, { navigator: navigator }));
            case 'User':
                return (React.createElement(UserView, { navigator: navigator }));
        }
    }
    render() {
        return (React.createElement(Navigator, { initialRoute: { id: 'Login', params: { message: 'home首页' } }, configureScene: (route) => {
                if (route.sceneConfig) {
                    return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromRight;
            }, renderScene: this.renderView }));
    }
}
export default () => myApp;
