var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * author:SunShinewyf
 * date:2017-01-02
 */
import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
import { Tips } from '../../components';
import { Login } from '../../actions/userAction';
import { userStore } from '../../stores/userStore';
import { bindActionCreators } from 'redux';
const bgImg = require('../../../public/loginBg.png');
const userImg = require('../../../public/username.png');
const pawImg = require('../../../public/password.png');
const store = userStore();
function mapStateToProps(store) {
    return {
        status: store.loginIn.status,
        isSuccess: store.loginIn.isSuccess,
        user: store.loginIn.user
    };
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(Login, dispatch) };
}
let LoginView = class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
    }
    handleLogin() {
        if (!this.state.name || !this.state.password) {
            this.setState({
                tipsVisible: true,
                errorTip: '请填写用户名或密码'
            });
        }
    }
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(View, { style: [styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }] },
                React.createElement(Image, { source: bgImg, style: { width: CONST.WIDTH, height: 250 } }),
                React.createElement(View, { style: [styles.innerContainer, { width: CONST.WIDTH - 80, marginTop: 40 }] },
                    React.createElement(Image, { source: userImg, style: styles.inputImg }),
                    React.createElement(TextInput, { style: [styles.input, {}], placeholder: '用户名', onChangeText: (text) => {
                            this.setState({
                                name: text
                            });
                        } })),
                React.createElement(View, { style: [styles.innerContainer, { width: CONST.WIDTH - 80, marginTop: 20 }] },
                    React.createElement(Image, { source: pawImg, style: styles.inputImg }),
                    React.createElement(TextInput, { style: [styles.input, {}], placeholder: '密码', onChangeText: (psw) => {
                            this.setState({
                                password: psw
                            });
                        } })),
                React.createElement(TouchableOpacity, { style: [styles.button, { width: CONST.WIDTH - 80, marginTop: 50 }], onPress: () => {
                        console.log('ooo');
                    } },
                    React.createElement(Text, { style: [styles.buttonText] }, "register")),
                React.createElement(TouchableOpacity, { style: [styles.button, { width: CONST.WIDTH - 80, marginTop: 15 }], onPress: () => {
                        this.handleLogin;
                    } },
                    React.createElement(Text, { style: [styles.buttonText] }, "Login")),
                React.createElement(Tips, { visible: this.state.tipsVisible, title: this.state.errorTip }))));
    }
};
LoginView = __decorate([
    connect()
], LoginView);
export { LoginView };
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    input: {
        width: 300,
        height: 50,
        color: '#3d3d3d',
        paddingLeft: 10
    },
    inputImg: {
        width: 30,
        height: 30,
        marginLeft: 40
    },
    button: {
        height: 45,
        backgroundColor: '#2a8ae0',
        borderColor: '#2a8ae0',
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    }
});
