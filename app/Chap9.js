import React, {Component} from 'react';
import {ScrollView, Text, Dimensions, FlatList} from 'react-native';
import SearchComponent from './SearchComponent';

// Fabriquer un composant de saisi pour conditionner l'appel à l'API
// Maitre en oeuvre un composant controllé
// Découpler et faire communiquer les composants

const {width, height} = Dimensions.get('window');

export default class Chap8 extends Component {

        state = {
            nbr: 0,
            term: 'play',
            retrieved: []
        }


    getMoviesFromApiAsync() {
        let url = 'https://itunes.apple.com/search?term='+this.state.term
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
            this.setState({nbr: responseJson.resultCount, retrieved: responseJson.results});
            })
            .catch((error) => {
            console.error(error);
        });
    }

    search = (searched) => {
        if (searched.length > 0) {
            this.setState({term: searched}, () => this.getMoviesFromApiAsync());
        }
    }
    
    render() {
        return (
            <ScrollView>
                <SearchComponent search={this.search}/>
                {this.state.nbr !== 0 && <Text>{this.state.nbr}</Text>}
                { this.state.retrieved.length > 0 && <FlatList 
                    style={{width:width}} 
                    data={this.state.retrieved}
                    keyExtractor={(item, index) => `item${index}`} 
                    renderItem={({item}) => <Text>{item.artistName}</Text>}
                />
                }
            </ScrollView>
        )
    }

}