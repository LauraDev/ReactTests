import React, {Component} from 'react';
import {Image} from 'react-native';
import NY1 from './../assets/NY1.jpg'

// Afficher une image
export default class Chap2 extends Component {
    render() {
        let pic = { uri: this.props.uri};
        return <Image source={pic} style= {{width: 150, height:150}}/>
        // return <Image source={NY1} style= {{width: 150, height:150}}/>
        // return <Image source={require('./../assets/NY1.jpg')} style= {{width: 150, height:150}}/>
    }

}