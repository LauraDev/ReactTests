import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet, Dimensions} from 'react-native';

// Fabriquer un composant de saisi pour conditionner l'appel à l'API
const {width, height} = Dimensions.get('window');

export default class SearchComponent extends Component {


    _searchTextInputChanged(text) {
        this.searchedText = text 
    }
    
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput 
                    style={styles.textinput} 
                    placeholder='Vous recherchez ....'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this.props.search(this.searchedText)}
                />
                <Button title='Rechercher' onPress={() => {this.props.search(this.searchedText)}}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        width: width - 20,
        padding: 10,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})