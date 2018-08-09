import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Chap2 from './app/Chap2';
import Chap3 from './app/Chap3';
import Chap4 from './app/Chap4';
import Chap5 from './app/Chap5';
import Chap6 from './app/Chap6';
import Chap7 from './app/Chap7';
import Chap8 from './app/Chap8';
import Chap9 from './app/Chap9';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Chap2 uri='https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi'/> */}
        {/* <Chap3/> */}
        {/* <Chap4/> */}
        {/* <Chap5/> */}
        {/* <Chap6/> */}
        {/* <Chap7/> */}
        {/* <Chap8/> */}
        <Chap9/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
