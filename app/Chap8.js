import React, {Component} from 'react';
import {View, Text} from 'react-native';

// Appel réseau en utilisant Fetch
// APi https://itunes.apple.com/search
// Utilisation de promise
// Afficher le nombre de résultats

export default class Chap8 extends Component {

    state = {
        nbr: 0,
        term: 'play'
    }

    componentDidMount() {
        this.getMoviesFromApiAsync()
    }

    getMoviesFromApiAsync() {
        fetch('https://itunes.apple.com/search?term='+this.state.term)
            .then((response) => response.json())
            .then((responseJson) => {
            this.setState({nbr: responseJson.resultCount});
            })
            .catch((error) => {
            console.error(error);
        });
    }
    
    render() {
        return (
            <View>
                <Text>{this.state.nbr}</Text>
            </View>
        )
    }

}


// import React, { Component } from 'react';
// import {Text} from 'react-native';
// const API_URL = "https://itunes.apple.com/search";

// // Fabriquer un composant de saisi por conditionner l'appel à l'API
// // Maitre en oeuvre un composant controllé
// // Découpler et faire communiquer les composants

// export default class Chap9 extends Component{
//     state={
//         result:-1,
//         term:'dock of the bay'
//     };

//     componentDidMount(){
//         fetch(API_URL+"?term="+this.state.term).then(
//             resp => resp.json()
//         )
//         .then(
//             d=>this.setState({result:d.resultCount})
//         )
//     }

//     render(){
//         return (<Text>Nombre de résultat {this.state.result}</Text>)
//     }
// }