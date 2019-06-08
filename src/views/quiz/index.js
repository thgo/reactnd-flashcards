import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import Header from '../../components/header'
import { white } from '../../../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import CardFlip from 'react-native-card-flip'
import {
  setLocalNotification,
  clearLocalNotification
} from '../../../utils/notification'
import MiddleQuiz from '../../components/middleQuiz'
import styles from './styles'

class Quiz extends Component {

  state = {
    idxItem: 1,
    correctAnswer: 0
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quiz',
      headerLeft: () => (
        <Ionicons
          name={'md-arrow-back'}
          onPress={() => navigation.navigate('DeckDetail', {
            title: navigation.getParam('title', '')
          })}
          color={white}
          size={25}
          style={{ marginLeft: 16 }}
        />
      )
    }
  }

  handleVote = (option) => {
    const { deck } = this.props
    const { idxItem, correctAnswer } = this.state

    this.setState({
      idxItem: idxItem + 1,
      correctAnswer: option ? correctAnswer + 1 : correctAnswer
    }, () => {
      if (!deck.questions[idxItem]) {
        this.setNotification()
        return this.navigateToResult()
      }
      this.card.flip()
    })
  }

  navigateToResult = () => {
    const { correctAnswer } = this.state
    const { deck } = this.props

    this.props.navigation.navigate('Result', {
      correctAnswer,
      totalQuestions: deck.questions.length,
      quizTitle: deck.title
    })

    this.clearState()
  }

  clearState = () => {
    this.setState({
      idxItem: 1,
      correctAnswer: 0
    })
  }

  setNotification = async () => {
    await clearLocalNotification()
    setLocalNotification()
  }

  render() {

    const { deck } = this.props
    const { idxItem } = this.state
    const question = deck.questions && deck.questions[idxItem - 1] && deck.questions[idxItem - 1].question
    const answer = deck.questions && deck.questions[idxItem - 1] && deck.questions[idxItem - 1].answer

    return (
      <View style={{flex: 1}}>
        <Header
          title={`Question ${idxItem} of ${deck.questions.length}`}
          subtitle='Tap in the card to see answer'
          fontSize={20}
        />

        <View
          style={styles.quizContainer}>
          <CardFlip
            style={styles.cardContainer}
            ref={(card) => this.card = card}>

            <TouchableOpacity
              style={styles.card}
              onPress={() => this.card.flip()}
            >
              <MiddleQuiz
                cardTitle='Question'
                cardText={`${question}`}
              />

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => this.card.flip()}>

              <MiddleQuiz
                cardTitle='Answer'
                cardText={`${answer}`}
              />

              <View style={styles.voteContainer}>
                <TouchableOpacity
                  style={styles.voteBtn}
                  onPress={() => this.handleVote(false)}>
                  <Ionicons
                    name="ios-thumbs-down"
                    size={30}
                    color={'#D81159'}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.voteBtn}
                  onPress={() => this.handleVote(true)}>
                  <Ionicons
                    name="ios-thumbs-up"
                    size={30}
                    color={'#22B573'}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </CardFlip>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ decks }, props) => {
  const { navigation } = props
  const title = navigation.getParam('title', 'Deck Title')

  return {
    deck: decks[title]
  }
}

export default connect(mapStateToProps)(withNavigation(Quiz))