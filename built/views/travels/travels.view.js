var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Copyright 2016 SunShine
 * 2016-12-21
 */
import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StyleSheet } from 'react-native';
import { FooterBar, HeaderBar, ListItem, Dialog, Share } from '../../components';
import * as CONST from '../../CONST';
import { travelStore } from '../../stores';
import { travelActions } from '../../actions';
const store = travelStore();
const mapDispatchProps = dispatch => ({
    actions: bindActionCreators(travelActions, dispatch)
});
let TravelsView = class TravelsView extends React.Component {
    constructor(props) {
        super(props);
        this.componentWillReceiveProps = () => {
        };
        /**
         *open dialog
         */
        this.openDialog = () => {
            this.setState({
                dialogIsVisible: true
            });
        };
        /**
         *close dialog
         */
        this.closeDialog = () => {
            this.setState({
                dialogIsVisible: false
            });
        };
        /**
         *openShare
         */
        this.openShare = () => {
            this.setState({
                shareIsVisible: true
            });
        };
        /**
         *close share
         */
        this.closeShare = () => {
            this.setState({
                shareIsVisible: false
            });
        };
        this.state = {
            dialogIsVisible: false,
            shareIsVisible: false
        };
    }
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(View, { style: [styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }] },
                React.createElement(HeaderBar, { title: '游记列表', navigator: this.props.navigator, onPress: this.openDialog }),
                React.createElement(View, { style: styles.listWrapper },
                    React.createElement(ListItem, { share: this.openShare }),
                    React.createElement(ListItem, null)),
                React.createElement(Dialog, { isVisible: this.state.dialogIsVisible, closeDialog: this.closeDialog }),
                React.createElement(Share, { isVisible: this.state.shareIsVisible, closeShare: this.closeShare }),
                React.createElement(FooterBar, { navigator: this.props.navigator }))));
    }
};
TravelsView = __decorate([
    connect(state => state, mapDispatchProps)
], TravelsView);
export { TravelsView };
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
    },
    listWrapper: {
        margin: 10,
        backgroundColor: '#F2F2F2'
    }
});
