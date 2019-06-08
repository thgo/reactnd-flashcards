import React, { Component } from 'react'
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { purple, white } from '../../../../utils/colors'
import { bindActionCreators } from 'redux'
import { addNewDeck } from '../../../store/actions'
import { addDeckAPI } from '../../../services/api'
import styles from './styles'

class NewDeck extends Component {

  static navigationOptions = {
    title: 'Create new deck',
    headerStyle: {
      backgroundColor: purple
    },
    headerTintColor: white
  }

  state = {
    newDeckTitle: ''
  }

  handleInputChange = ( input ) => {
    this.setState({ newDeckTitle: input })
  }

  handleAddDeck = () => {

    const { addNewDeck } = this.props
    const { newDeckTitle } = this.state

    const deck = this.getNewDeckObject(newDeckTitle)

    addNewDeck({
      [newDeckTitle]: deck
    })

    addDeckAPI({
      [newDeckTitle]: deck
    })

    this.props.navigation.navigate(
      'Home'
    )
  }

  getNewDeckObject = (deckname) => {
    return {
      title: deckname,
      questions: []
    }
  }

  render () {

    const { newDeckTitle } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.text}> Deck Title </Text>
        <TextInput
          style={styles.inputText}
          name='newDeckTitle'
          value={newDeckTitle}
          onChangeText={this.handleInputChange}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleAddDeck}
          disabled={newDeckTitle === ''}
        >
          <Text style={styles.buttonText}>
            Save
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewDeck }, dispatch)
}

export default withNavigation(
  connect(null, mapDispatchToProps)(NewDeck)
)