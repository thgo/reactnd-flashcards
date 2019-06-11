import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNewDeck } from '../../../store/actions'
import { addDeckAPI } from '../../../services/api'
import styles from './styles'

class NewDeck extends Component {

  state = {
    newDeckTitle: ''
  }

  handleInputChange = ( input ) => {
    this.setState({ newDeckTitle: input })
  }

  handleAddDeck = () => {

    const { addNewDeck, navigation } = this.props
    const { newDeckTitle } = this.state

    const deck = this.getNewDeckObject(newDeckTitle)

    addNewDeck({
      [newDeckTitle]: deck
    })

    addDeckAPI({
      [newDeckTitle]: deck
    })

    navigation.navigate('DeckDetail', {
      title: newDeckTitle
    })
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
          disabled={newDeckTitle.trim() === ''}
        >
          <Text style={styles.buttonText}>
            Save
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

NewDeck.propTypes = {
  addNewDeck: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewDeck }, dispatch)
}

export default withNavigation(
  connect(null, mapDispatchToProps)(NewDeck)
)