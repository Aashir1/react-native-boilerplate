/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Badge, Text, Icon, Form, Item, Input, Label } from 'native-base';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import AuthActions from '../store/action/auth';
class SignupDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            loader: false
        }
    }
    static navigationOptions = {
        title: 'SignUp',
        headerTitleStyle: {
            flex: 1,
            alignSelf: 'center',
            textAlign: 'center'
        },
        headerRight: (<View></View>)
    };

    replaceScreen = (route) => {
        // const { locations, position } = this.props.navigation.state.params;
        this.props.navigation.dispatch({
            type: 'ReplaceCurrentScreen',
            key: `${route}`,
            routeName: `${route}`,
            // params: { locations, position },
        });
    };

    _signUp = () => {
        // let { navigate } = this.props.navigation;
        // console.log(navigate);
        this.props.signup(this.state.name, this.state.email, this.state.password, this.replaceScreen);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    <Item style={styles.input}>
                        <Icon name="ios-person" style={{ color: '#000' }} />
                        <Input placeholder="Username" onChangeText={(value => this.setState({ name: value }))} />
                    </Item>
                    <Item style={styles.input}>
                        <Icon name="ios-mail" style={{ color: '#000' }} />
                        <Input placeholder="Email" onChangeText={(value => this.setState({ email: value }))} />
                    </Item>
                    <Item last style={styles.input}>
                        <Icon name="ios-unlock" style={{ color: '#000' }} />
                        <Input placeholder="Password"
                            secureTextEntry
                            onChangeText={(value => this.setState({ password: value }))}
                            onSubmitEditing={this._signUp}
                        />
                    </Item>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            Already have an Account ?{' '}
                        </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('LogIn')}>
                            <Text>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {
                        this.props.loader ?
                            <View style={{ flex: 1, paddingTop: 20 }}>
                                <ActivityIndicator />
                            </View>
                            :
                            null
                    }
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        marginBottom: 20,
    },
    inputWrapper: {
        padding: 20
    }

});


function mapStateToProps(state){
    console.log(state);
    return{
        loader: state.authReducer.progressBar
    }
}
function mapDispatchToProps(dispatch){
    return{
        signup: (name, email, password, navigate)=> dispatch(AuthActions.signup(name, email, password, navigate))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignupDemo);