import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    login = () => {
        const { email, password } = this.state
        fetch('http://192.168.8.100:8000/api/login', {
            method: 'POST',
            headers: {
                Accept: 'Application/json',
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                if(responseJson.access_token==null){
                    alert('Invalid credentials')
                    Actions.push('login')
                } else{
                    Actions.push('home')
                }
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.firstText}>Stay with us</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}
                    />
                    <TouchableOpacity onPress={this.login} style={styles.touch}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.bottomView}>
                        <Text>Don't Have an account Yet?</Text>
                        <TouchableOpacity
                            onPress={() => Actions.push('signup')}
                            style={styles.bottomTouch}>
                            <Text style={styles.loginText}>signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    input: {
        width: '85%',
        height: 45,
        marginVertical: 20,
        borderWidth: 1,
        paddingHorizontal: 7,
        borderColor: 'rgba(206, 214, 224,1.0)'
    },
    firstText: {
        marginBottom: 20,
        color: 'rgba(19, 15, 64,1.0)',
        fontWeight: 'bold',
        fontSize: 25
    },
    touch: {
        width: '55%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6D214F',
        marginVertical: 20
    },
    loginText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    },
    bottomView: {
        position: "absolute",
        bottom: 5,
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    bottomTouch: {
        width: '20%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6D214F',
        marginVertical: 20,
    }
});

export default Login
