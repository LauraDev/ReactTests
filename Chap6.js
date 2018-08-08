import React, {Component} from 'react';
import { StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

//  Crée une vue scrollable avec scrollView composée de 2 images
// Mettre en place un scroll horizontal avec un paging 
const {width, height} = Dimensions.get('window');
const IMGS = [
    {link: require('./assets/big/NY1.jpg'), text: 'Image 1'},
    {link: require('./assets/big/NY2.jpg'), text: 'Image 2'}
]

export default class Chap6 extends Component {

    render() {
        return (
            <ScrollView style={StyleSheet.absoluteFillObject} horizontal pagingEnabled>
            {/* PAS BESOIN DE DIRE = TRUE sur les props ex: horizontal
            <ScrollView 
                style={StyleSheet.absoluteFillObject}
                horizontal={true}
                pagingEnabled={true}
            > */}

                {/* <Image source={IMGS[0].link} style={{height: height, width: width}}/>
                <Image source={IMGS[1].link} style={{height: height, width: width}} /> */}
                {/* ---- OU ---- */}
                {
                    IMGS.map((value, index) => <Image key={index} source={value.link} style={{height: height, width: width}}/>)
                }

            </ScrollView>
        )
    }

}