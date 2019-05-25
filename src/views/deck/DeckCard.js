import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckCard extends Component {

  render () {
    return (
      <View style={styles.deck}>
        <Text>Deck</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 50,
    
  }
})

export default DeckCard