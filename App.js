/**
 * Basic example of rendering text fields and buttons
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class App extends React.Component {

  state = {
    cardNum: 0
  }
  
  constructor() {
    super();
    this.SUITS = [ "spades", "hearts", "clubs", "diamonds" ];
    this.VALUES = [
      "ace", "two", "three", "four",
      "five", "six", "seven", "eight",
      "nine", "ten", "jack", "queen", "king"
    ];

    this.cards = [];

    this.SUITS.forEach( suit => {
      this.VALUES.forEach( val => {
        this.cards.push(`${val}_of_${suit}`);
      })
    });
  }  

  draw() {
    this.setState({
      cardNum: Math.floor(Math.random()*this.cards.length)
    });
  }
  
  render() {    
    return (
      <View style={styles.container}>
        <Text>{this.cards[this.state.cardNum]}</Text>
        <Button onPress={this.draw.bind(this)} title="test"></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'    
  }
});

export default App;
