/**
 * author:SunShinewyf
 * date:2017-01-02
 */
import * as React from 'react';
import { connect, Provider } from 'react-redux'
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Navigator, StyleSheet } from 'react-native'
import * as CONST from '../../CONST'
import { FooterBar, Tips } from '../../components'
import { Login } from '../../actions/userAction'
import { userStore } from '../../stores/userStore'
import { bindActionCreators } from 'redux';

const bgImg = require('../../../public/loginBg.png')
const userImg = require('../../../public/username.png')
const pawImg = require('../../../public/password.png')
const store = userStore()

export interface loginProps {
    navitgator?: Navigator
}

export interface loginState {
    name?: string
    password?: string
    tipsVisible?: boolean
    errorTip?: string
}

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
class LoginView extends React.Component<loginProps, loginState>{
    constructor(props: loginProps) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }

    handleLogin() {
        if (!this.state.name || !this.state.password) {
            this.setState({
                tipsVisible: true,
                errorTip: '请填写用户名或密码'
            })
        }
    }
    render() {
        return (
            <Provider store={store}>
                <View style={[styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }]}>
                    <Image source={bgImg} style={{ width: CONST.WIDTH, height: 250 }} />
                    <View style={[styles.innerContainer, { width: CONST.WIDTH - 80, marginTop: 40 }]}>
                        <Image source={userImg} style={styles.inputImg} />
                        <TextInput style={[styles.input, {}]}
                            placeholder={'用户名'}
                            onChangeText={(text) => {
                                this.setState({
                                    name: text
                                })
                            } } />
                    </View>
                    <View style={[styles.innerContainer, { width: CONST.WIDTH - 80, marginTop: 20 }]}>
                        <Image source={pawImg} style={styles.inputImg} />
                        <TextInput style={[styles.input, {}]}
                            placeholder={'密码'}
                            onChangeText={(psw) => {
                                this.setState({
                                    password: psw
                                })
                            } } />
                    </View>
                    <TouchableOpacity
                        style={[styles.button, { width: CONST.WIDTH - 80, marginTop: 50 }]}
                        onPress={() => {
                            console.log('ooo')
                        } }
                        >
                        <Text style={[styles.buttonText]}>register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { width: CONST.WIDTH - 80, marginTop: 15 }]}
                        onPress={() => {
                            this.handleLogin
                        } }
                        >
                        <Text style={[styles.buttonText]}>Login</Text>
                    </TouchableOpacity>
                    <Tips visible={this.state.tipsVisible} title={this.state.errorTip} />
                </View>
            </Provider>
        )
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
})
export default connect(mapStateToProps)(LoginView)
