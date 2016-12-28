/**
 * Copyright 2016 SunShine
 * 2016-12-18
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from "react";
import { Navigator } from 'react-native';
import { HomeView, SpotsView, TravelsView, WriteView, UserView } from './views';
class myApp extends React.Component {
    constructor(props) {
        super(props);
    }
    /**
     *页面跳转
     */
    renderView(route, navigator) {
        let routeId = route.id;
        switch (routeId) {
            case 'Home':
                return (React.createElement(HomeView, { navigator: navigator }));
            case 'Spots':
                return (React.createElement(SpotsView, __assign({}, route.params, { navigator: navigator })));
            case 'Travels':
                return (React.createElement(TravelsView, __assign({}, route.params, { navigator: navigator })));
            case 'Write':
                return (React.createElement(WriteView, __assign({}, route.params, { navigator: navigator })));
            case 'User':
                return (React.createElement(UserView, __assign({}, route.params, { navigator: navigator })));
        }
    }
    render() {
        return (React.createElement(Navigator, { initialRoute: { id: 'Home', params: { message: 'travel页面' } }, configureScene: (route) => {
                if (route.sceneConfig) {
                    return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromBottom;
            }, renderScene: (route, navigator) => this.renderView(route, navigator) }));
    }
}
export default () => myApp;
