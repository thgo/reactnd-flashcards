import React, { Component } from 'react'
import { 
  StyleSheet, 
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
    console.log('Input: ', input)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 20,
    fontWeight: '600'
  },
  inputText: {
    width: 300,
    height: 44,
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#757575',
    margin: 20
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    borderRadius: 5,
    margin: 20,
    alignSelf: 'stretch'
  },
  buttonText: {
    textAlign: 'center',
    color: white,
    fontSize: 20,
  }
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewDeck }, dispatch)
}

export default withNavigation(
  connect(null, mapDispatchToProps)(NewDeck)
)