import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { addNewCard } from '../../../../store/actions'
import { bindActionCreators } from 'redux'
import { addCardAPI } from '../../../../services/api'
import styles from './styles'

class Cards extends Component {

  state = {
    question: '',
    answer: ''
  }

  handleQuestionChange = ( input ) => {
    this.setState({ question: input })
  }

  handleAnswerChange = ( input ) => {
    this.setState({ answer: input })
  }

  handleAddCard = () => {
    const { question, answer } = this.state
    const { deck, addNewCard, navigation } = this.props

    const newCard = {
      question,
      answer
    }

    addNewCard(deck.title, newCard)

    addCardAPI(deck.title, newCard)
    navigation.goBack()
  }

  render () {

    const { question, answer } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.text}> Question: </Text>
        <TextInput
          style={styles.inputText}
          name='question'
          value={question}
          onChangeText={this.handleQuestionChange}
        />

        <Text style={styles.text}> Asnwer: </Text>
        <TextInput
          style={styles.inputText}
          name='answer'
          value={answer}
          onChangeText={this.handleAnswerChange}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleAddCard}
          disabled={question.trim() === '' || answer.trim() === ''}
        >
          <Text style={styles.buttonText}>
            Save
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    )
  }
}

Cards.propTypes = {
  deck: PropTypes.object.isRequired,
  addNewCard: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

function mapStateToProps ({ decks }, props) {
  const {navigation} = props
  const title = navigation.getParam('title', 'Deck Title')

  return {
    deck: decks[title]
  }
}

mapDispatchToProps = dispatch =>
  bindActionCreators({ addNewCard }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Cards))