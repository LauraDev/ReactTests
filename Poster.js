import React, {Component} from 'react';
import {ImageBackground, View, Text, StyleSheet} from 'react-native';

//  Afficher une image qui prend toute la taille de l'écran et son sous titre
export default class Chap4 extends Component {

    render() {
        return (
            <ImageBackground source = {this.props.background} style={StyleSheet.absoluteFillObject}>
                <Text style={[styles.caption, this.props.style]}>{this.props.caption}</Text>
            </ImageBackground>
        )
    }

}

const styles = StyleSheet.create({
    caption: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        margin: 20,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
        color: '#FFF',
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'red',
    }

})

// ATTENTION: Lorsque l'on passe des style en props, celui qui est le plus à droite écrase le 1er