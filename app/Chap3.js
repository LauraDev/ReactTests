import React, {Component} from 'react';
import {Image} from 'react-native';

// Modifier le state
// Créer un slider à partir de 3 images
const IMGS = [
    require('./../assets/NY1.jpg'),
    require('./../assets/NY2.jpg'),
    require('./../assets/NY3.jpg')
]

export default class Chap3 extends Component {
    state = {
        imgPtr: 0
    }

    componentDidMount() {
        setInterval( () => {
            let imgPtr = (this.state.imgPtr + 1) % IMGS.length;
            this.setState({imgPtr});
        }, 2000)
    }

    render() {
        return <Image source = {IMGS[this.state.imgPtr]} style={{flex: 240, height: 159}}/>
    }

}