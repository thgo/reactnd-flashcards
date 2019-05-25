import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { purple, white } from '../../../../utils/colors'

class DeckDetail extends Component {

  static navigationOptions = {
    title: 'DECK TITLE',
    headerStyle: {
      backgroundColor: purple
    },
    headerTintColor: white
    
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Details</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default withNavigation(DeckDetail)