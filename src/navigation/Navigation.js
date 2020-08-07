import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

import { Login, Signup, Home, PostForm, Splash } from '../screens'

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login" />
                    <Scene initial key="signup" component={Signup} title="Signup" />
                    <Scene key="home" component={Home} hideNavBar />
                    <Scene key="postform" component={PostForm} hideNavBar />
                </Stack>
            </Router>
        )
    }
}

export default Navigation
