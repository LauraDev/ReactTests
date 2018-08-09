import React, {Component} from 'react';
import Poster from './Poster';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { AsyncStorage } from "react-native"

//  Ajouter la possibilité de cliquer sur l'élément pour charger l'image suivante (plus besoin de slider)
// Puis utiliser asynStorage pour sauvegarder l'image qui a été cliquée afin qu'elle se reouvre lors de reload de l'app
const IMGS = [
    {link: require('./../assets/big/NY1.jpg'), text: 'Image 1'},
    {link: require('./../assets/big/NY2.jpg'), text: 'Image 2'}
]

export default class Chap5 extends Component {
    
    state = {
        imgPtr: 0
    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('chosenImg', this.state.imgPtr.toString());
        } catch (error) {
            alert(error)
        }
    }

    componentDidMount() {
        this._retrieveData()
    }

    _retrieveData = async () => {
        try {
            const chosenImg = await AsyncStorage.getItem('chosenImg');
            if (chosenImg !== null) {
                this.setState({imgPtr: parseInt(chosenImg)})
            }
        } catch (error) {
        }
    }

    onPress = () => {
        let imgPtr = (this.state.imgPtr + 1) % IMGS.length;
        this.setState({imgPtr}, () => this._storeData());
    }

    render() {
        const img = IMGS[this.state.imgPtr]
        return (
            <TouchableOpacity 
                onPress = {this.onPress}
                activeOpacity={0.9}
                style={StyleSheet.absoluteFillObject}
            >
                <Poster 
                    background = {img.link} 
                    caption= {img.text} 
                    style={{borderColor: 'white'}}
                />
            </TouchableOpacity>
        )
    }

}
// import React, { Component } from 'react';
// import Poster from './components/Poster';
// import { TouchableOpacity, AsyncStorage } from 'react-native';
// ​
// ​
// const IMGS = [
//     { img: require('../assets/big/NY1.jpg'), caption: 'Cool picture #1' },
//     { img: require('../assets/big/NY2.jpg'), caption: 'Cool picture #2' }
// ]
//     ​
//     export default class Chap5 extends Component {
//     ​
//     state = {
//         imgPtr: 0
//     }
//     ​
//     componentDidMount() {
//         AsyncStorage.getItem('imgPtrKey').then(imagePointerStored => {
//         if (imagePointerStored) {
//             this.setState({ imgPtr: parseInt(imagePointerStored) });
//         }
//         }).catch((e) => {
//         console.log("Error retrieving imgPtr ", e);
//         });
//     }
//     ​
//     onPress = () => {
//         let imgPtr = (this.state.imgPtr + 1) % IMGS.length;
//         this.setState({ imgPtr: imgPtr });
//         ​
//         AsyncStorage.setItem("imgPtrKey", imgPtr.toString());
//     }
//     ​
//     render() {
//         const { img, caption } = IMGS[this.state.imgPtr];
//         return (
//             <TouchableOpacity onPress={this.onPress} activeOpacity={0.9}>
//                 <Poster
//                 backgroundImage={img}
//                 caption={caption}
//                 style={{ width: 240, height: 159 }}
//                 />
//             </TouchableOpacity>
//         )
//     }
// }​