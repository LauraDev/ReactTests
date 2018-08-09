import React, {Component} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';

// utiliser le module de caméra react-native-camera 
// afficher le flux video
// bouton pour prendre une photo
//  afficher la photo prise à cote du bouton
export default class Chap7 extends Component {

    state = {image:null}

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style = {styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                    <TouchableOpacity
                        onPress={this.takePicture.bind(this)}
                        style = {styles.capture}
                    >
                        <Text style={{fontSize: 14}}> SNAP </Text>
                    </TouchableOpacity>
                    {this.state.image && <Image source={{uri: 'data:image/png;base64,'+ this.state.image.base64}} style={{height: 50, width: 50}}/> }
                </View>
            </View>
        );
    }

    takePicture = async function() {
        if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options)
        this.setState({image: data});
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        alignSelf: 'stretch'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});