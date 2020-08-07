import React from 'react'

import { View, Text, StyleSheet, Animated, Image, Easing } from 'react-native'

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: new Animated.Value(0.1),
            width: new Animated.Value(0),
            height: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 0.9,
            duration: 1000,
            useNativeDriver: false,
        }).start(() => {
            Animated.timing(this.state.width, {
                toValue: 200,
                duration: 3000,
                asing: Easing.linear,
                useNativeDriver: false,
            }).start();
            Animated.timing(this.state.height, {
                toValue: 200,
                duration: 3000,
                asing: Easing.linear,
                useNativeDriver: false,
            }).start();
        });
    }

    render() {
        return (
            <Animated.View style={[styles.container, { opacity: this.state.opacity }]}>
                <Animated.Image
                    source={require('../../res/img/2.jpg')}
                    style={[styles.image, { opacity: this.state.opacity, width: this.state.width, height: this.state.height }]}
                />
            </Animated.View>
        )
    }
}
export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'indigo'
    },
    image: {
        borderRadius: 10,
    }
});