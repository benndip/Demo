import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    }

    register = () => {
        const { name, email, password, password_confirmation } = this.state
        fetch('http://192.168.8.100:8000/api/register', {
            method: 'POST',
            headers: {
                Accept: 'Application/json',
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                if(responseJson.access_token==null){

                    Actions.push('signup')
                    alert('Invalid credentials')
                } else{
                    Actions.push('login')
                }
            })
            .catch(error => {
                alert(error.message)
            })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.firstText}>Stay with us</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        onChangeText={name => this.setState({ name })}
                    />
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
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry
                        onChangeText={password_confirmation => this.setState({ password_confirmation })}
                    />
                    <TouchableOpacity onPress={this.register} style={styles.touch}>
                        <Text style={styles.loginText}>Signup</Text>
                    </TouchableOpacity>
                    <View style={styles.bottomView}>
                        <Text>Have an account Already?</Text>
                        <TouchableOpacity onPress={()=>{
                            Actions.push('home')
                        }} style={styles.bottomTouch}>
                            <Text style={styles.loginText}>login</Text>
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
    },
    input: {
        width: '85%',
        height: 45,
        marginVertical: 5,
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
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20
    },
    bottomTouch: {
        width: '20%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6D214F',
        marginVertical: 25,
    }
});

export default Signup
