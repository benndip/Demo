import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Picker } from '@react-native-community/picker'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ImagePicker from 'react-native-image-crop-picker';


export class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bestCaptain: '',
            imagePath: '',
            imageLoaded: false
        }
    }

    goToCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            this.setState({
                imagePath: image.path,
                imageLoaded: true
            })
        });
    }

    goToGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            this.setState({
                imagePath: image.path,
                imageLoaded: true
            })
        });
    }

    goToVideo = () =>{
        ImagePicker.openCamera({
            mediaType: 'video',
        }).then(video => {
            console.log(video);
            this.setState({
                imagePath: video.path,
                imageLoaded: true
            })
        });
    }

    componentDidMount(){
        ImagePicker.clean()
        .then(() => {
          console.log('removed tmp images from tmp directory');
        })
        .catch((e) => {
          alert(e);
        });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.mainText}>Post Your Business</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Business name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your location"
                />
                <Text style={styles.topText}> chose your business Type</Text>
                <Picker
                    selectedValue={this.state.bestCaptain}
                    style={{
                        height: 50,
                        width: 300,
                        color: 'indigo'
                    }}
                    onValueChange={(inValue, inIndex) => this.setState({
                        bestCaptain:
                            inValue
                    })}
                >
                    <Picker.Item label="Coorperate Business" value="james_kirk" />
                    <Picker.Item label="Small scale business" value="john_sheridan" />
                    <Picker.Item label="Limited company" value="han_solo" />
                    <Picker.Item label="Very Large Business" value="ahab" />
                </Picker>
                <Text style={styles.pictureOrGaleryText}>Take a picture or select from Galery</Text>
                <View style={styles.imageView}>
                    {this.state.imageLoaded ?

                        <Image
                            source={{ uri: this.state.imagePath }}
                            style={styles.image}
                        />
                        :
                        <Image
                            source={require('../../res/img/not-found.png')}
                            style={styles.image}
                        />
                    }
                </View>
                <View style={styles.takeImageView}>
                    <TouchableOpacity onPress={this.goToCamera}>
                        <AntDesign
                            name="camerao"
                            color="rgba(34, 47, 62,1.0)"
                            size={35}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goToVideo}>
                        <AntDesign
                            name="videocamera"
                            color="rgba(34, 47, 62,1.0)"
                            size={30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goToGallery}>
                        <EvilIcons
                            name="image"
                            color="rgba(34, 47, 62,1.0)"
                            size={48}
                        />
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.postText}>Post</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    input: {
        width: '85%',
        height: 45,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 10
    },
    topText: {
        color: 'rgba(214, 48, 49,1.0)',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    mainText: {
        color: '#6D214F',
        fontSize: 25,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 20
    },
    imageView: {
        width: '80%',
        marginTop: 10,
        marginBottom: 30,
        height: 200,
        borderWidth: 1,
        borderColor: 'rgba(206, 214, 224,1.0)',
        // backgroundColor: 'rgba(223, 228, 234,1.0)'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    pictureOrGaleryText: {
        color: '#6D214F',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 5
    },
    touch: {
        width: '80%',
        backgroundColor: 'rgba(214, 48, 49,1.0)',
        marginTop: 20,
        height: 45,
        justifyContent: "center",
        alignItems: 'center',
    },
    postText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    takeImageView: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
export default PostForm
