/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Badge, Text, Icon, Form, Item, Input, Label } from 'native-base';
import firebase from 'react-native-firebase';
import { NavigationActions } from 'react-navigation';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        console.log(this.props.navigation);        
    }
    static navigationOptions = {
        title: 'Login',
        headerTitleStyle: {
            flex: 1,
            alignSelf: 'center',
            textAlign: 'center'
        },
        headerRight: (<View></View>)
    };

    // replaceScreen = () => {
    //     // const { locations, position } = this.props.navigation.state.params;
    //     console.log(this.props.navigation);
    //     // console.log(locations, position);
    //     this.props.navigation.dispatch({
    //         key: `Home`,
    //         type: 'ReplaceCurrentScreen',
    //         routeName: `Home`,
    //         // params: { locations, position },
    //     });
    // };


    _login = () => {
        let { navigation } = this.props;
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => {
                    console.log(user);
                    navigation.navigate('Home');
            })
            .catch((error) => {
                // alert(error.message);
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Item style={styles.input}>
                        <Icon name="ios-mail" style={{ color: '#000' }} />
                        <Input placeholder="Email" onChangeText={(value => this.setState({ email: value }))} />
                    </Item>
                    <Item last style={styles.input}>
                        <Icon name="ios-unlock" style={{ color: '#000' }} />
                        <Input placeholder="Password" 
                        secureTextEntry 
                        onChangeText={(value => this.setState({ password: value }))}
                        onSubmitEditing={this._login}
                        />
                    </Item>
                    <View style={{ flexDirection: 'row' }}>
                    <Text>
                        Don't have an Account ?{' '}
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text>
                            SignUp
                        </Text>
                    </TouchableOpacity>
                </View>
                    {/* <TextInput
                        value={this.state.email}
                        placeholder="Email"
                        onChangeText={(value => this.setState({ email: value }))} />
                    <TextInput
                        placeholder="Password"
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={(value => this.setState({ password: value }))} />
                    <Text>{`\n`}</Text>
                    <Button title='Login' onPress={this._login} />
                    <Button title='Signup' onPress={() => this.props.navigation.navigate('SignUp')} /> */}

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
});