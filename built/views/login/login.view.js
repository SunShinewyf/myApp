/**
 * author:SunShinewyf
 * date:2017-01-02
 */
import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as CONST from '../../CONST';
import { Tips } from '../../components';
const bgImg = require('../../../public/loginBg.png');
const userImg = require('../../../public/username.png');
const pawImg = require('../../../public/password.png');
export class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
    }
    /**
     *判断是否登录
     */
    checkLogin() {
        if (!this.state.name || !this.state.password) {
            this.setState({
                tipsVisible: true,
                errorTip: '请填写用户名或密码'
            });
        }
        else {
        }
    }
    render() {
        return (React.createElement(View, { style: [styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }] },
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
                    this.checkLogin();
                } },
                React.createElement(Text, { style: [styles.buttonText] }, "Login")),
            React.createElement(Tips, { visible: this.state.tipsVisible, title: this.state.errorTip })));
    }
}
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
