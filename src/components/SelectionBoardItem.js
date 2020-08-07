import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

class SelectionBoardItem extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                activeOpacity={0}
                style={{ ...styles.container, ...this.props.style }}
            >
                <View style={styles.imageView}>
                    <Image style={styles.image} source={this.props.imagePath} />
                </View>
                <Text style={styles.belowText}>{this.props.belowText}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '45%',
        height: 160,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginVertical: 5,
    },
    imageView: {
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: '70%',
        borderRadius: 10
    },
    belowText: {
        color: '#f7f1e3',
        fontSize: 14,
        fontWeight: '700'
    }
})

export default SelectionBoardItem