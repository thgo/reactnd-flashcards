import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { withNavigation, NavigationActions, StackActions } from 'react-navigation'
import { white } from '../../../../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'

class Result extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('quizTitle', '')} Quiz`,
      headerLeft: () => (
        <Ionicons
          name={'ios-close'}
          onPress={() => navigation.navigate('DeckDetail', {
            title: navigation.getParam('quizTitle', '')
          })}
          color={white}
          size={48}
          style={{ marginLeft: 16 }}
        />
      )
    }
  }

  backToDeck = () => {
    const { navigation } = this.props

    navigation.navigate('DeckDetail', {
      title: navigation.getParam('quizTitle', '')
    })
  }

  resetQuiz = () => {
    const { navigation } = this.props

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({
        routeName: 'Quiz',
        params: {
          title: navigation.getParam('quizTitle', '')
        }
      })],
    })
    navigation.dispatch(resetAction)
  }

  render() {

    const { navigation } = this.props
    const { correctAnswer, totalQuestions } =  navigation.state.params
    const percent = ( correctAnswer / totalQuestions ) * 100

    console.log('render: ', correctAnswer)

    return (
      <View style={styles.card}>
        <View style={styles.textView}>
          <Text style={{ fontSize: 18 }}>
            { ` Correct answer: ${correctAnswer} of ${totalQuestions} questions` }
          </Text>
          <Text style={styles.textPercent}>
            { parseInt(percent) + '%' }
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={this.resetQuiz}
          >
            <Text>
              Restart quiz
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.backToDeck}>
            <Text>
              Back to deck
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default withNavigation(Result)