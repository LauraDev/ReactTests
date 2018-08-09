import React, {Component} from 'react';
import Poster from './Poster';

//  Après création d'un élément Poster qui affiche un image de fond, implémenter ce composant dans le slider
const IMGS = [
    {link: require('./../assets/big/NY1.jpg'), text: 'Image 1'},
    {link: require('./../assets/big/NY2.jpg'), text: 'Image 2'}
]

export default class Chap4 extends Component {
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
        const img = IMGS[this.state.imgPtr]
        return (
            <Poster 
                background = {img.link} 
                caption= {img.text} 
                style={{borderColor: 'white'}}
            />    
        )
        
    }

}