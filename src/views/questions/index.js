import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { deleteCardAPI } from '../../services/api'
import { deleteCard } from '../../store/actions'
import { bindActionCreators } from 'redux'
import Question from './question'
import styles from './styles'

function Questions ({ deck, deleteCard }) {

  handleDeleteCard = (question) => {
    deleteCard(deck.title, question.question)
    deleteCardAPI(deck.title, question.question)
  }

  return (
    <View style={{flex: 1}}>
      { deck.questions.map((question, index) => (
        <View style={styles.question} key={index}>
          <Question question={question} handleDeleteCard={this.handleDeleteCard} />
        </View>
      ))}
    </View>
  )
}

function mapStateToProps (state, props) {
  const { deck } = props
  return {
    deck
  }
}

Questions.propTypes = {
  deck: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired
}

mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteCard }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Questions)