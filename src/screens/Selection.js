import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { Actions } from 'react-native-router-flux'
import { SelectionBoardItem } from '../components/'

class Selection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <View style={styles.iconAndTextView}>
                        <TouchableOpacity>
                            <AntDesign name='arrowleft' size={25} color='#fff' />
                        </TouchableOpacity>
                        <Text style={styles.appNameText}>Board</Text>
                    </View>
                    <Text style={styles.selectText}>Select your option</Text>
                </View>
                <View style={{ flex: 1, marginTop: -80 }}>
                    <ScrollView contentContainerStyle={styles.scroll}>
                        <SelectionBoardItem
                            imagePath={require('../../res/img/postBusiness.jpeg')}
                            belowText='Post Your Business'
                            style={styles.cardColor}
                            onPress={() => Actions.push('postform')}
                        />
                        <SelectionBoardItem
                            imagePath={require('../../res/img/newItem-removebg-preview.png')}
                            belowText='Post your Item'
                            onPress={() => Actions.push('tabNavigation')}
                            style={styles.cardColor}
                        />
                        <SelectionBoardItem
                            imagePath={require('../../res/img/search2.jpeg')}
                            belowText='Search for Business'
                            style={styles.cardColor}

                        />
                        <SelectionBoardItem
                            imagePath={require('../../res/img/search1.jpeg')}
                            belowText='Search for an item'
                            style={styles.cardColor}
                        />
                        <SelectionBoardItem
                            imagePath={require('../../res/img/r1.png')}
                            belowText='rate this app'
                            style={styles.cardColor}
                        />
                        <SelectionBoardItem
                            imagePath={require('../../res/img/bot.jpeg')}
                            belowText='infoRobot'
                            style={styles.cardColor}
                        />
                    </ScrollView>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    topView: {
        width: '100%',
        height: 230,
        backgroundColor: '#6D214F',
        paddingTop: 20,
        paddingLeft: 24,
    },
    iconAndTextView: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
    },
    appNameText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '30%'
    },
    selectText: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 20

    },
    scroll: {
        paddingTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 0

    },
    cardColor: {
        backgroundColor: '#182C61'
    }
})

export default Selection
